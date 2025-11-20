

export enum Topic {
  INFO_PROCESSING = '資訊處理 (Module A)',
  COMPUTER_SYSTEM = '電腦系統基礎 (Module B)',
  INTERNET = '互聯網及其應用 (Module C)',
  PROGRAMMING = '運算思維與程式編寫 (Module D)',
  SOCIAL_IMPACTS = '社會影響 (Module E)',
  DB_ELECTIVE = '數據庫 (選修 A)',
  ALGO_ELECTIVE = '演算法與程式 (選修 C)',
}

export enum QuestionType {
  MCQ = 'MCQ',
  LONG = 'LONG',
}

export interface MCQ {
  id: string;
  type: QuestionType.MCQ;
  topic: Topic;
  question: string;
  options: string[];
  answerIndex: number; // 0-3
  explanation: string;
}

export interface LongQuestion {
  id: string;
  type: QuestionType.LONG;
  topic: Topic;
  question: string;
  subQuestions?: string[]; // For structured questions like (a), (b)
  markingScheme: string[];
  keyPoints: string[];
}

export interface TopicNote {
  id: string;
  category: "Core" | "Database" | "Programming";
  title: string;
  sections: {
    heading: string;
    content: string[];
    codeSnippet?: string;
    important?: boolean;
  }[];
}

export interface ProgressData {
  totalQuestionsAttempted: number;
  totalQuizzesCompleted: number;
  correctAnswers: number;
  topicStats: Record<string, {
    attempted: number;
    correct: number;
    lastStudied: string;
  }>;
}

export type CheatsheetCategory = '核心概念' | 'SQL 語法' | 'Excel 公式' | '常用縮寫';

export interface CheatsheetItem {
  id: string;
  category: CheatsheetCategory;
  term: string;
  content: string; // definition or formula
  example?: string;
}

export interface ExamSkill {
  id: string;
  category: "General" | "Paper 1" | "Paper 2A (DB)" | "Paper 2C (Prog)";
  title: string;
  summary: string;
  content: string[]; // Bullet points of detailed advice
  tags: string[]; // e.g., ["Time Management", "Keywords"]
}

export interface Flashcard {
  id: string;
  topic: Topic;
  term: string;
  definition: string;
}

export interface StarTip {
  id: string;
  category: "Mindset" | "Paper 1" | "SQL Elite" | "Coding Elite";
  title: string; // e.g., "The 'Discuss' Question Framework"
  content: string; // Detailed HTML-like text or long string with line breaks
  keyPoints: string[]; // Summary bullets
}