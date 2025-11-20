import React, { useState } from 'react';
import { CHEATSHEET_DATA } from '../data/cheatsheet';
import { CheatsheetCategory } from '../types';
import { Eye, EyeOff, Database, Code, Table, Cpu, FileText } from 'lucide-react';

const CATEGORIES: { id: CheatsheetCategory; icon: any; color: string }[] = [
  { id: '核心概念', icon: Cpu, color: 'bg-blue-100 text-blue-600' },
  { id: 'SQL 語法', icon: Database, color: 'bg-purple-100 text-purple-600' },
  { id: 'Excel 公式', icon: Table, color: 'bg-green-100 text-green-600' },
  { id: '常用縮寫', icon: FileText, color: 'bg-amber-100 text-amber-600' },
];

const Cheatsheet: React.FC = () => {
  const [isBlurMode, setIsBlurMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CheatsheetCategory | 'ALL'>('ALL');

  const filteredData = activeCategory === 'ALL'
    ? CHEATSHEET_DATA
    : CHEATSHEET_DATA.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">ICT 速讀筆記</h1>
          <p className="text-slate-500 mt-1">考試前最後衝刺，重點概念一目了然。</p>
        </div>
        
        {/* Active Recall Toggle */}
        <button
          onClick={() => setIsBlurMode(!isBlurMode)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-all shadow-sm ${
            isBlurMode 
              ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
              : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-50'
          }`}
        >
          {isBlurMode ? <EyeOff size={18} /> : <Eye size={18} />}
          {isBlurMode ? '背誦模式 (已隱藏)' : '普通模式'}
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar">
        <button
          onClick={() => setActiveCategory('ALL')}
          className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${
            activeCategory === 'ALL'
              ? 'bg-slate-800 text-white'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          全部內容
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeCategory === cat.id
                ? 'bg-slate-800 text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span>{cat.id}</span>
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredData.map((item) => {
          const categoryConfig = CATEGORIES.find(c => c.id === item.category);
          const Icon = categoryConfig?.icon || FileText;

          return (
            <div key={item.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                   <div className={`flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-bold ${categoryConfig?.color}`}>
                     <Icon size={14} /> {item.category}
                   </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.term}</h3>
                
                <div className="space-y-3">
                  <div 
                    className={`text-slate-600 text-sm leading-relaxed p-3 rounded-lg bg-slate-50 transition-all duration-300 cursor-pointer ${
                      isBlurMode ? 'filter blur-md hover:blur-none select-none' : ''
                    }`}
                  >
                    {item.content}
                  </div>
                  
                  {item.example && (
                    <div className="border-l-2 border-indigo-200 pl-3">
                      <p className="text-xs text-slate-400 uppercase font-bold mb-1">Example</p>
                      <code 
                        className={`block text-xs font-mono text-indigo-600 bg-indigo-50 p-2 rounded transition-all duration-300 cursor-pointer ${
                            isBlurMode ? 'filter blur-sm hover:blur-none select-none' : ''
                        }`}
                      >
                        {item.example}
                      </code>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-20 text-slate-400">
          此分類暫無內容
        </div>
      )}
    </div>
  );
};

export default Cheatsheet;