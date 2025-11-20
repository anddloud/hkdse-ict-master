
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Topic, QuestionType } from '../types';
import { MC_QUESTIONS, LONG_QUESTIONS } from '../data/questionBank';
import { BookOpen, FileText, Play, AlertCircle, CheckCircle2 } from 'lucide-react';

const COMPULSORY_MODULES = [
  Topic.INFO_PROCESSING,
  Topic.COMPUTER_SYSTEM,
  Topic.INTERNET,
  Topic.PROGRAMMING,
  Topic.SOCIAL_IMPACTS,
];

const ELECTIVE_MODULES = [
  Topic.DB_ELECTIVE,
  Topic.ALGO_ELECTIVE,
];

const QuizConfig: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState<Topic>(Topic.INFO_PROCESSING);
  const [questionType, setQuestionType] = useState<QuestionType>(QuestionType.MCQ);
  const [questionCount, setQuestionCount] = useState(5);

  // Helper to get questions based on topic selection (handling the Algo mix logic)
  const getAvailableQuestions = (topic: Topic, type: QuestionType) => {
    const pool = type === QuestionType.MCQ ? MC_QUESTIONS : LONG_QUESTIONS;
    
    // Logic Update: If Algorithm Elective is selected, include Core Programming questions
    // This allows students to practice "Computational Thinking" along with "Programming"
    if (topic === Topic.ALGO_ELECTIVE) {
      return pool.filter(q => q.topic === Topic.ALGO_ELECTIVE || q.topic === Topic.PROGRAMMING);
    }
    
    return pool.filter(q => q.topic === topic);
  };

  const availableQuestions = getAvailableQuestions(selectedTopic, questionType);
  const maxAvailable = availableQuestions.length;

  // Reset or clamp question count when constraints change
  useEffect(() => {
    if (maxAvailable === 0) {
      setQuestionCount(0);
    } else if (questionCount > maxAvailable) {
      setQuestionCount(maxAvailable);
    } else if (questionCount === 0 && maxAvailable > 0) {
      setQuestionCount(Math.min(5, maxAvailable));
    }
  }, [maxAvailable, selectedTopic, questionType]);

  const handleStart = () => {
    if (maxAvailable > 0) {
      navigate(`/quiz?topic=${encodeURIComponent(selectedTopic)}&type=${questionType}&count=${questionCount}`);
    }
  };

  const renderTopicButton = (topic: Topic) => {
    // Calculate counts using the same logic as availableQuestions
    const mcQuestions = getAvailableQuestions(topic, QuestionType.MCQ);
    const longQuestions = getAvailableQuestions(topic, QuestionType.LONG);
    const total = mcQuestions.length + longQuestions.length;
    
    // Parse Display Names with robust fallback
    // Expected format: "Topic Name (Module X)" or "Topic Name (選修 X)"
    let displayName = topic.toString();
    let code = '';

    const match = topic.match(/^(.*)\s\((.*)\)$/);
    if (match) {
      displayName = match[1];
      code = match[2];
    }

    const isSelected = selectedTopic === topic;

    return (
      <button
        key={topic}
        onClick={() => setSelectedTopic(topic)}
        className={`relative p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between h-full ${
          isSelected
            ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-600 shadow-md'
            : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50 hover:shadow-sm'
        }`}
      >
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide ${
              isSelected ? 'bg-indigo-200 text-indigo-800' : 'bg-slate-100 text-slate-500'
            }`}>
              {code}
            </span>
            {isSelected && <CheckCircle2 size={18} className="text-indigo-600" />}
          </div>
          <span className={`font-bold text-lg leading-tight block ${isSelected ? 'text-indigo-900' : 'text-slate-700'}`}>
            {displayName}
          </span>
        </div>
        
        <div className="mt-4 pt-3 border-t border-slate-100/50 flex justify-between items-center text-xs">
          <span className={isSelected ? 'text-indigo-600 font-medium' : 'text-slate-400'}>
            庫存: {total} 題
          </span>
        </div>
      </button>
    );
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">自訂練習配置</h1>
        <p className="text-slate-500 mt-2">選擇課題與題數，量身打造你的溫習計劃。</p>
      </div>
      
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        
        {/* Topic Selection */}
        <div className="p-6 md:p-8 border-b border-slate-100">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold">1</span>
            <h2 className="text-lg font-bold text-slate-900">選擇課題</h2>
          </div>

          {/* Compulsory Section */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 pl-1">必修部分 (Compulsory)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {COMPULSORY_MODULES.map(renderTopicButton)}
            </div>
          </div>

          {/* Elective Section */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 pl-1">選修部分 (Elective - 2 選 1)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ELECTIVE_MODULES.map(renderTopicButton)}
            </div>
          </div>
        </div>

        {/* Type Selection */}
        <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold">2</span>
            <h2 className="text-lg font-bold text-slate-900">題目類型</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setQuestionType(QuestionType.MCQ)}
              className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-3 transition-all ${
                questionType === QuestionType.MCQ
                  ? 'border-indigo-600 bg-white text-indigo-700 ring-2 ring-indigo-600 shadow-md'
                  : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-indigo-200 text-slate-600'
              }`}
            >
              <BookOpen size={28} className={questionType === QuestionType.MCQ ? 'text-indigo-600' : 'text-slate-400'} /> 
              <div className="text-center">
                <span className="block font-bold text-lg">多項選擇題</span>
                <span className="text-xs opacity-70">MCQ</span>
              </div>
            </button>
            <button
              onClick={() => setQuestionType(QuestionType.LONG)}
              className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-3 transition-all ${
                questionType === QuestionType.LONG
                  ? 'border-indigo-600 bg-white text-indigo-700 ring-2 ring-indigo-600 shadow-md'
                  : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-indigo-200 text-slate-600'
              }`}
            >
              <FileText size={28} className={questionType === QuestionType.LONG ? 'text-indigo-600' : 'text-slate-400'} /> 
              <div className="text-center">
                <span className="block font-bold text-lg">長題目</span>
                <span className="text-xs opacity-70">Long Questions</span>
              </div>
            </button>
          </div>
        </div>

        {/* Count Selection */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold">3</span>
            <h2 className="text-lg font-bold text-slate-900">題目數量</h2>
          </div>
           
           {maxAvailable > 0 ? (
             <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex justify-between items-end mb-6">
                  <span className="text-4xl font-bold text-indigo-600">{questionCount}</span>
                  <span className="text-sm text-slate-500 font-medium bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                    共 {maxAvailable} 題可用
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max={maxAvailable}
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:accent-indigo-700"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-3 font-medium">
                  <span>1</span>
                  <span>{maxAvailable}</span>
                </div>
             </div>
           ) : (
             <div className="flex items-center gap-3 text-amber-700 bg-amber-50 p-4 rounded-xl border border-amber-100">
               <AlertCircle size={20} className="shrink-0" />
               <span className="font-medium">此課題暫無 {questionType === QuestionType.MCQ ? 'MCQ' : '長題目'}。請嘗試切換課題或類型。</span>
             </div>
           )}
        </div>
        
        {/* Action */}
        <div className="p-6 border-t border-slate-100 bg-slate-50">
          <button
            onClick={handleStart}
            disabled={maxAvailable === 0}
            className={`w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-lg shadow-lg transition-all transform ${
                maxAvailable > 0 
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200 hover:-translate-y-0.5 active:translate-y-0' 
                : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
            }`}
          >
            <Play size={24} fill="currentColor" /> 
            <span>開始練習</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default QuizConfig;
