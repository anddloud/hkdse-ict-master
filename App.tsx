
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import QuizConfig from './pages/QuizConfig';
import Quiz from './pages/Quiz';
import Tips from './pages/Tips';
import Cheatsheet from './pages/Cheatsheet';
import ExamSkills from './pages/ExamSkills';
import ConceptReviewer from './pages/ConceptReviewer';
import { ProgressProvider } from './context/ProgressContext';

const App: React.FC = () => {
  return (
    <ProgressProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz-config" element={<QuizConfig />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/concepts" element={<ConceptReviewer />} />
            <Route path="/cheatsheet" element={<Cheatsheet />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/exam-skills" element={<ExamSkills />} />
          </Routes>
        </Layout>
      </Router>
    </ProgressProvider>
  );
};

export default App;
