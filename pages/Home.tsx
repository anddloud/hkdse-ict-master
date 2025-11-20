import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Trophy, Target, Clock, ArrowRight, BookCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Topic } from '../types';

const Home: React.FC = () => {
  const { progress } = useProgress();

  const accuracy = progress.totalQuestionsAttempted > 0
    ? Math.round((progress.correctAnswers / progress.totalQuestionsAttempted) * 100)
    : 0;

  // Transform data for chart
  const chartData = Object.values(Topic).map(topic => {
    const stats = progress.topicStats[topic];
    return {
      name: topic.split(' ')[0], // Shorten name
      score: stats ? Math.round((stats.correct / (stats.attempted || 1)) * 100) : 0,
      attempted: stats?.attempted || 0
    };
  }).filter(d => d.attempted > 0); // Only show active topics

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">歡迎回來，考生！</h1>
        <p className="text-slate-500">這裏是你通往 5** 的進度概覽。</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-amber-100 text-amber-600 rounded-full">
            <Trophy size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500">總答對題數</p>
            <p className="text-2xl font-bold">{progress.correctAnswers}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
            <Target size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500">整體準確率</p>
            <p className="text-2xl font-bold">{accuracy}%</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-green-100 text-green-600 rounded-full">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500">已做題目</p>
            <p className="text-2xl font-bold">{progress.totalQuestionsAttempted}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-purple-100 text-purple-600 rounded-full">
            <BookCheck size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500">已完成練習</p>
            <p className="text-2xl font-bold">{progress.totalQuizzesCompleted || 0}</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="font-bold text-lg mb-4">強弱項分析 (準確率 %)</h2>
          {chartData.length > 0 ? (
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical" margin={{ left: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: number) => [`${value}%`, '準確率']}
                  />
                  <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.score > 70 ? '#22c55e' : entry.score > 40 ? '#eab308' : '#ef4444'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="h-64 flex items-center justify-center text-slate-400 bg-slate-50 rounded-lg">
              尚無數據，請先開始練習
            </div>
          )}
        </div>

        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-6 rounded-xl text-white flex flex-col justify-between shadow-lg">
          <div>
            <h2 className="font-bold text-xl mb-2">準備好挑戰了嗎？</h2>
            <p className="text-indigo-100 mb-6">每日堅持練習是奪星的關鍵。立即開始一組新的題目吧！</p>
          </div>
          <Link 
            to="/quiz-config" 
            className="bg-white text-indigo-700 font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors"
          >
            開始練習 <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;