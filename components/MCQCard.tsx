import React, { useState, useEffect } from 'react';
import { MCQ } from '../types';
import { CheckCircle, XCircle, ChevronRight, AlertCircle } from 'lucide-react';

interface MCQCardProps {
  question: MCQ;
  onResult: (isCorrect: boolean) => void;
  onNext: () => void;
}

const MCQCard: React.FC<MCQCardProps> = ({ question, onResult, onNext }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset local state when the question ID changes (i.e., next question)
  useEffect(() => {
    setSelectedIndex(null);
    setIsSubmitted(false);
  }, [question.id]);

  const handleOptionClick = (index: number) => {
    if (isSubmitted) return;
    
    setSelectedIndex(index);
    setIsSubmitted(true);
    
    const isCorrect = index === question.answerIndex;
    onResult(isCorrect);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8">
      {/* Question Text */}
      <h2 className="text-xl font-bold text-slate-900 mb-6 leading-relaxed">
        {question.question}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((opt, idx) => {
          let btnClass = "w-full text-left p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-all flex justify-between items-center group";
          let icon = null;

          if (isSubmitted) {
            if (idx === question.answerIndex) {
              // Correct Answer (Green)
              btnClass = "w-full text-left p-4 rounded-lg border border-green-500 bg-green-50 text-green-800 font-medium flex justify-between items-center shadow-sm";
              icon = <CheckCircle className="text-green-600" size={20} />;
            } else if (idx === selectedIndex) {
              // Wrong User Selection (Red)
              btnClass = "w-full text-left p-4 rounded-lg border border-red-500 bg-red-50 text-red-800 flex justify-between items-center";
              icon = <XCircle className="text-red-600" size={20} />;
            } else {
              // Unselected Other Options (Dimmed)
              btnClass = "w-full text-left p-4 rounded-lg border border-slate-100 opacity-50 flex justify-between items-center grayscale";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleOptionClick(idx)}
              disabled={isSubmitted}
              className={btnClass}
            >
              <div className="flex items-center gap-3">
                <span className={`font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${
                  isSubmitted && idx === question.answerIndex 
                    ? 'bg-green-200 text-green-800' 
                    : (isSubmitted && idx === selectedIndex ? 'bg-red-200 text-red-800' : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600')
                }`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="text-base">{opt}</span>
              </div>
              {icon}
            </button>
          );
        })}
      </div>

      {/* Feedback & Navigation Section */}
      {isSubmitted && (
        <div className="mt-8 pt-6 border-t border-slate-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 mb-6 flex items-start gap-3">
            <AlertCircle className="text-blue-600 shrink-0 mt-1" size={20} />
            <div>
              <h4 className="font-bold text-blue-800 mb-1 text-sm uppercase tracking-wider">解釋 (Explanation)</h4>
              <p className="text-slate-700 text-base leading-relaxed">{question.explanation}</p>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onNext}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 flex items-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              下一題 <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MCQCard;