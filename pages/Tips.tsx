
import React from 'react';
import { starTips } from '../data/fiveStarTips';
import { Star, Lightbulb } from 'lucide-react';

const Tips: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-20">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl mb-4">
            <Star size={32} fill="currentColor" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">5** 奪星秘籍 (Master Class)</h1>
        <p className="text-slate-500">除了知識，心態與策略是區分 Level 4 與 5** 的關鍵。</p>
      </div>

      <div className="space-y-6">
        {starTips.map((tip) => (
          <section key={tip.id} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden transition-all hover:shadow-md">
            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                {tip.category}
            </div>
            <h2 className="text-xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
                {tip.title}
            </h2>
            <div className="text-slate-700 mb-6 leading-relaxed whitespace-pre-wrap">
                {tip.content}
            </div>
            
            {tip.keyPoints.length > 0 && (
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                    <h3 className="text-sm font-bold text-indigo-800 mb-2 flex items-center gap-2">
                        <Lightbulb size={16} /> 核心重點 (Key Points):
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                        {tip.keyPoints.map((point, idx) => (
                            <li key={idx} className="text-sm text-indigo-900 font-medium">{point}</li>
                        ))}
                    </ul>
                </div>
            )}
          </section>
        ))}

        {starTips.length === 0 && (
            <div className="text-center py-12 text-slate-400">
                暫無 5** 提示。
            </div>
        )}
      </div>
    </div>
  );
};

export default Tips;
