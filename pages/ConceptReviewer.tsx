
import React, { useState } from 'react';
import { conceptNotes } from '../data/concepts';
import { ChevronDown, ChevronRight, BookOpen, Database, Terminal, Star, AlertTriangle } from 'lucide-react';

type Category = "Core" | "Database" | "Programming";

const ConceptReviewer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Core");
  const [activeNoteId, setActiveNoteId] = useState<string>(conceptNotes.find(n => n.category === "Core")?.id || "");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const filteredNotes = conceptNotes.filter(n => n.category === activeCategory);
  const activeNote = conceptNotes.find(n => n.id === activeNoteId);

  const toggleSection = (idx: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [`${activeNoteId}-${idx}`]: !prev[`${activeNoteId}-${idx}`]
    }));
  };

  const CategoryButton = ({ cat, icon: Icon, label }: { cat: Category, icon: any, label: string }) => (
    <button
      onClick={() => {
        setActiveCategory(cat);
        const firstNote = conceptNotes.find(n => n.category === cat);
        if (firstNote) setActiveNoteId(firstNote.id);
        setExpandedSections({});
      }}
      className={`flex items-center gap-2 px-4 py-3 rounded-lg font-bold transition-all flex-1 md:flex-none justify-center ${
        activeCategory === cat
          ? 'bg-indigo-600 text-white shadow-md'
          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] md:h-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">重點筆記 (Concept Master)</h1>
        <p className="text-slate-500 mt-2">精選 DSE 核心概念、SQL 語法與 Python 編程要點。</p>
      </div>

      {/* Category Selector */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 md:pb-0">
        <CategoryButton cat="Core" icon={BookOpen} label="Core Modules" />
        <CategoryButton cat="Database" icon={Database} label="Database" />
        <CategoryButton cat="Programming" icon={Terminal} label="Python" />
      </div>

      <div className="flex flex-col md:flex-row gap-6 flex-1 min-h-0">
        {/* Sidebar / Menu */}
        <div className="md:w-64 shrink-0 bg-white rounded-xl border border-slate-200 overflow-y-auto max-h-[300px] md:max-h-none">
          <div className="p-4 bg-slate-50 border-b border-slate-100 font-bold text-slate-500 text-sm uppercase tracking-wider">
            {activeCategory} Topics
          </div>
          <div>
            {filteredNotes.map(note => (
              <button
                key={note.id}
                onClick={() => {
                    setActiveNoteId(note.id);
                    setExpandedSections({});
                }}
                className={`w-full text-left px-4 py-3 border-b border-slate-50 hover:bg-indigo-50 transition-colors flex items-center justify-between group ${
                  activeNoteId === note.id ? 'bg-indigo-50 text-indigo-700 font-bold border-l-4 border-l-indigo-600' : 'text-slate-700'
                }`}
              >
                <span>{note.title}</span>
                {activeNoteId === note.id && <ChevronRight size={16} />}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          {activeNote ? (
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                    {activeCategory === "Core" ? <BookOpen size={24} /> : activeCategory === "Database" ? <Database size={24} /> : <Terminal size={24} />}
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">{activeNote.title}</h2>
                    <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded">{activeNote.category}</span>
                </div>
              </div>

              <div className="space-y-4">
                {activeNote.sections.map((section, idx) => {
                  const isExpanded = expandedSections[`${activeNote.id}-${idx}`] !== false; // Default open? No, let's toggle.
                  // Actually let's make them toggleable but open by default or controlled.
                  // Let's make them explicitly toggleable.
                  const isOpen = expandedSections[`${activeNote.id}-${idx}`] ?? true; 

                  return (
                    <div key={idx} className={`border rounded-xl transition-all ${section.important ? 'border-amber-200 bg-amber-50/30' : 'border-slate-200'}`}>
                      <button 
                        onClick={() => toggleSection(idx)}
                        className="w-full flex items-center justify-between p-4 font-bold text-slate-800 hover:bg-slate-50 rounded-t-xl"
                      >
                        <div className="flex items-center gap-2">
                            {section.important && <AlertTriangle size={18} className="text-amber-500" />}
                            <span>{section.heading}</span>
                        </div>
                        {isOpen ? <ChevronDown size={20} className="text-slate-400" /> : <ChevronRight size={20} className="text-slate-400" />}
                      </button>
                      
                      {isOpen && (
                        <div className="p-4 pt-0 border-t border-transparent">
                            <ul className="space-y-2 mb-4">
                                {section.content.map((point, pid) => (
                                    <li key={pid} className="flex items-start gap-2 text-slate-700 leading-relaxed">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-400 rounded-full shrink-0"></span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                            {section.codeSnippet && (
                                <div className="bg-slate-800 rounded-lg p-4 mt-3 relative group">
                                    <div className="absolute top-2 right-2 text-xs text-slate-400 font-mono opacity-50 group-hover:opacity-100 transition-opacity">
                                        {activeCategory === 'Database' ? 'SQL' : 'Python'}
                                    </div>
                                    <pre className="font-mono text-sm text-indigo-100 overflow-x-auto whitespace-pre-wrap">
                                        <code>{section.codeSnippet}</code>
                                    </pre>
                                </div>
                            )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-slate-400">
                請選擇一個課題
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConceptReviewer;
