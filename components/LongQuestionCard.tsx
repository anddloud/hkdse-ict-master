import React, { useState, useEffect } from 'react';
import { LongQuestion } from '../types';
import { Eye, ChevronRight, Check, X, Key } from 'lucide-react';

interface LongQuestionCardProps {
  question: LongQuestion;
  onResult: (isCorrect: boolean) => void;
  onNext: () => void;
}

const LongQuestionCard: React.FC<LongQuestionCardProps> = ({ question, onResult, onNext }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [showMarking, setShowMarking] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setUserAnswer('');
    setShowMarking(false);
  }, [question.id]);

  const handleSelfAssess = (isMastered: boolean) => {
    onResult(isMastered);
    onNext();
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8">
        {/* Question Header */}
        <h2 className="text-xl font-bold text-slate-900 mb-6 leading-relaxed">
            {question.question}
        </h2>

        {/* Sub Questions */}
        {question.subQuestions && question.subQuestions.length > 0 && (
            <ul className="space-y-4 mb-8 pl-4 border-l-2 border-indigo-100">
                {question.subQuestions.map((sq, i) => (
                    <li key={i} className="text-slate-700 font-medium">{sq}</li>
                ))}
            </ul>
        )}

        {/* Answer Draft Area */}
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                 <label className="block text-sm font-bold text-slate-700">你的答案草稿 (Draft):</label>
                 <span className="text-xs text-slate-400">此欄位不會被評分，僅供草擬</span>
            </div>
            <textarea
                className="w-full p-4 border border-slate-300 rounded-xl h-48 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none font-mono text-sm"
                placeholder="在此輸入你的答案重點... (e.g. Foreign Key, Normalization)"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
            ></textarea>

            {/* Show Marking Scheme Action */}
            {!showMarking && (
                <div className="flex justify-end pt-4">
                    <button
                        onClick={() => setShowMarking(true)}
                        className="flex items-center gap-2 bg-white border-2 border-indigo-600 text-indigo-700 px-6 py-3 rounded-lg font-bold hover:bg-indigo-50 transition-colors"
                    >
                        <Eye size={20} /> 顯示評分參考 (Marking Scheme)
                    </button>
                </div>
            )}

            {/* Marking Scheme Display */}
            {showMarking && (
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
                        <h3 className="font-bold text-slate-900 text-lg">評分參考</h3>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded-full">5** Standard</span>
                    </div>

                    {/* Marking Points */}
                    <ul className="space-y-3 mb-6">
                        {question.markingScheme.map((point, i) => (
                            <li key={i} className="flex gap-3 text-slate-700 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                                <span className="text-green-600 font-bold shrink-0 select-none">✓</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Key Points / Keywords */}
                    {question.keyPoints && question.keyPoints.length > 0 && (
                        <div className="mb-6">
                            <p className="text-sm font-bold text-indigo-600 mb-2 flex items-center gap-1">
                                <Key size={14} /> 關鍵字 (Must-have Keywords):
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {question.keyPoints.map((kp, i) => (
                                    <span key={i} className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded-md border border-indigo-200">
                                        {kp}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Self Assessment Controls */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
                        <span className="text-sm font-bold text-slate-500">自我評估你的表現:</span>
                        <div className="flex gap-3 w-full sm:w-auto">
                            <button
                                onClick={() => handleSelfAssess(false)}
                                className="flex-1 sm:flex-none px-5 py-2.5 bg-white border border-red-200 text-red-700 rounded-lg hover:bg-red-50 font-bold transition-colors shadow-sm flex items-center justify-center gap-2"
                            >
                                <X size={18} /> 需複習
                            </button>
                            <button
                                onClick={() => handleSelfAssess(true)}
                                className="flex-1 sm:flex-none px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 font-bold transition-colors shadow-md flex items-center justify-center gap-2"
                            >
                                <Check size={18} /> 完全掌握 <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default LongQuestionCard;