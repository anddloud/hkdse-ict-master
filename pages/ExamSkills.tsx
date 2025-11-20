
import React, { useState } from 'react';
import { examSkills } from '../data/examSkills';
import { Hash, Bookmark, ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { ExamSkill } from '../types';

const CATEGORIES: ExamSkill['category'][] = ["General", "Paper 1", "Paper 2A (DB)", "Paper 2C (Prog)"];

const ExamSkills: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredSkills = selectedCategory === 'ALL' 
    ? examSkills 
    : examSkills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-20">
      <div className="text-center border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">5** 應試攻略</h1>
        <p className="text-lg text-slate-500">掌握答題技巧，比死記硬背更重要。這裡收集了針對 HKDSE ICT 的實戰建議。</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setSelectedCategory('ALL')}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
            selectedCategory === 'ALL' 
              ? 'bg-slate-800 text-white' 
              : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-50'
          }`}
        >
          全部
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
              selectedCategory === cat 
                ? 'bg-slate-800 text-white' 
                : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredSkills.map((post) => {
          const isExpanded = expandedId === post.id;
          
          return (
            <article 
              key={post.id} 
              className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                isExpanded ? 'border-indigo-500 shadow-md' : 'border-slate-200 shadow-sm hover:border-indigo-300'
              }`}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(post.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide ${
                        post.category === 'General' ? 'bg-amber-100 text-amber-800' :
                        post.category === 'Paper 1' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {post.category}
                      </span>
                      {post.tags.map(tag => (
                        <span key={tag} className="flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                          <Hash size={10} /> {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 text-sm mt-2">{post.summary}</p>
                  </div>
                  <button className="text-slate-400 mt-1">
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </button>
                </div>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="pt-4 border-t border-slate-100">
                    <ul className="space-y-3">
                      {post.content.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-4 border-t border-slate-50 flex justify-end">
                      <button className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
                         <Bookmark size={14} /> 收藏筆記
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
      
      {filteredSkills.length === 0 && (
        <div className="text-center py-12 text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-300">
          <Filter size={32} className="mx-auto mb-2 opacity-50" />
          <p>此分類暫無筆記。</p>
        </div>
      )}
    </div>
  );
};

export default ExamSkills;