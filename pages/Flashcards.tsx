import React, { useState } from 'react';
import { FLASHCARDS } from '../data/questionBank';
import { Topic } from '../types';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';

const Flashcards: React.FC = () => {
  const [currentTopic, setCurrentTopic] = useState<Topic | 'ALL'>('ALL');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const filteredCards = currentTopic === 'ALL' 
    ? FLASHCARDS 
    : FLASHCARDS.filter(c => c.topic === currentTopic);

  const currentCard = filteredCards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
    }, 200);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
    }, 200);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">關鍵詞溫習卡</h1>
        <select 
          className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm"
          value={currentTopic}
          onChange={(e) => {
            setCurrentTopic(e.target.value as Topic | 'ALL');
            setCurrentIndex(0);
            setIsFlipped(false);
          }}
        >
          <option value="ALL">所有課題</option>
          {Object.values(Topic).map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {filteredCards.length > 0 ? (
        <div className="perspective-1000 h-80 w-full cursor-pointer group" onClick={() => setIsFlipped(!isFlipped)}>
          <div className={`relative w-full h-full transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
            
            {/* Front */}
            <div className="absolute w-full h-full bg-white border-2 border-indigo-100 rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center backface-hidden">
              <span className="text-xs font-bold text-indigo-500 tracking-wider mb-4 uppercase">{currentCard.topic}</span>
              <h2 className="text-4xl font-bold text-slate-800 text-center">{currentCard.term}</h2>
              <p className="absolute bottom-6 text-slate-400 text-sm flex items-center gap-2">
                <RotateCw size={14} /> 點擊翻轉查看定義
              </p>
            </div>

            {/* Back */}
            <div className="absolute w-full h-full bg-indigo-600 rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center rotate-y-180 backface-hidden">
              <h3 className="text-xl font-medium text-white text-center leading-relaxed">
                {currentCard.definition}
              </h3>
            </div>

          </div>
        </div>
      ) : (
        <div className="text-center py-20 text-slate-400">此課題暫無溫習卡</div>
      )}

      <div className="flex items-center justify-between px-4">
        <button 
          onClick={handlePrev}
          className="p-2 rounded-full hover:bg-slate-200 text-slate-600 transition-colors"
          disabled={filteredCards.length <= 1}
        >
          <ChevronLeft size={32} />
        </button>
        <span className="text-slate-500 font-medium">
          {currentIndex + 1} / {filteredCards.length}
        </span>
        <button 
          onClick={handleNext}
          className="p-2 rounded-full hover:bg-slate-200 text-slate-600 transition-colors"
          disabled={filteredCards.length <= 1}
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default Flashcards;