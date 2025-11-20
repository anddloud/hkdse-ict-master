import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { MC_QUESTIONS, LONG_QUESTIONS } from '../data/questionBank';
import { QuestionType, Topic, MCQ, LongQuestion } from '../types';
import { useProgress } from '../context/ProgressContext';
import { CheckCircle } from 'lucide-react';
import MCQCard from '../components/MCQCard';
import LongQuestionCard from '../components/LongQuestionCard';

const Quiz: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { updateProgress, completeQuiz } = useProgress();

  const topic = searchParams.get('topic') as Topic;
  const type = searchParams.get('type') as QuestionType;
  const count = Number(searchParams.get('count')) || 5;

  // Filter and Randomize questions
  const questions = useMemo(() => {
    const pool = type === QuestionType.MCQ ? MC_QUESTIONS : LONG_QUESTIONS;
    
    let filtered = [];
    
    // Special logic: If Algorithm Elective is selected, include Core Programming questions
    if (topic === Topic.ALGO_ELECTIVE) {
        filtered = pool.filter(q => q.topic === Topic.ALGO_ELECTIVE || q.topic === Topic.PROGRAMMING);
    } else {
        filtered = pool.filter(q => q.topic === topic);
    }

    return filtered.sort(() => 0.5 - Math.random()).slice(0, count);
  }, [topic, type, count]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  
  const currentQ = questions[currentIndex];

  if (!questions.length) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold text-slate-800">此課題暫無題目。</h2>
        <button onClick={() => navigate(-1)} className="mt-4 text-indigo-600 underline hover:text-indigo-800">返回</button>
      </div>
    );
  }

  const handleResult = (isCorrect: boolean) => {
    if (isCorrect) setScore(s => s + 1);
    updateProgress(topic, isCorrect);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Quiz Finished
      completeQuiz();
      setIsFinished(true);
    }
  };

  // Finished Screen
  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    let message = "再接再厲！";
    if (percentage >= 90) message = "太強了！5** 級別！";
    else if (percentage >= 70) message = "做得好！繼續保持！";
    else if (percentage >= 50) message = "及格了，但還有進步空間。";

    return (
      <div className="max-w-md mx-auto text-center space-y-8 py-12 bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mt-8">
        <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto text-indigo-600 ring-8 ring-indigo-50">
            <CheckCircle size={48} />
        </div>
        <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">練習完成！</h1>
            <p className="text-slate-500">{message}</p>
        </div>
        
        <div className="py-6 border-t border-b border-slate-100">
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-2">最終得分</p>
            <p className="text-5xl font-bold text-indigo-600">{score} <span className="text-2xl text-slate-400 font-medium">/ {questions.length}</span></p>
        </div>

        <div className="space-y-3">
            <button 
            onClick={() => navigate('/quiz-config')}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors"
            >
            開始新練習
            </button>
            <button 
            onClick={() => navigate('/')}
            className="w-full bg-white text-slate-600 border border-slate-200 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors"
            >
            返回主頁
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header & Progress */}
      <div className="mb-6 flex items-center justify-between text-sm text-slate-500 font-medium">
        <span>Question {currentIndex + 1} of {questions.length}</span>
        <span className="bg-slate-100 px-3 py-1 rounded-full">{topic}</span>
      </div>
      <div className="w-full bg-slate-200 h-2.5 rounded-full mb-8 overflow-hidden">
        <div 
            className="bg-indigo-600 h-full rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Component Renderer */}
      {currentQ.type === QuestionType.MCQ ? (
        <MCQCard 
            question={currentQ as MCQ}
            onResult={handleResult}
            onNext={handleNext}
        />
      ) : (
        <LongQuestionCard 
            question={currentQ as LongQuestion}
            onResult={handleResult}
            onNext={handleNext}
        />
      )}
    </div>
  );
};

export default Quiz;