import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';

interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (!showResult) {
      setSelectedOption(index);
    }
  };

  const checkAnswer = () => {
    setShowResult(true);
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setShowResult(false);
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
  };

  const question = questions[currentQuestion];
  const isCorrect = selectedOption === question.correctAnswer;

  return (
    <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
      <div className="bg-slate-800 p-4 flex items-center gap-2 text-white">
        <HelpCircle className="text-accent" />
        <h3 className="font-bold text-lg">Knowledge Check</h3>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <p className="text-lg font-medium text-slate-900 mt-2">{question.question}</p>
        </div>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            let baseClass = "w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center justify-between group ";
            
            if (showResult) {
              if (index === question.correctAnswer) {
                baseClass += "bg-green-50 border-green-500 text-green-900";
              } else if (index === selectedOption) {
                baseClass += "bg-red-50 border-red-500 text-red-900";
              } else {
                baseClass += "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
              }
            } else {
              if (selectedOption === index) {
                baseClass += "bg-indigo-50 border-indigo-500 text-indigo-900 shadow-sm ring-1 ring-indigo-500";
              } else {
                baseClass += "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                disabled={showResult}
                className={baseClass}
              >
                <span className="font-medium">{option}</span>
                {showResult && index === question.correctAnswer && <CheckCircle size={20} className="text-green-600" />}
                {showResult && index === selectedOption && index !== question.correctAnswer && <XCircle size={20} className="text-red-600" />}
              </button>
            );
          })}
        </div>

        {showResult ? (
          <div className="mt-6 bg-slate-50 p-4 rounded-lg border border-slate-100">
            <p className={`font-bold mb-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
              {isCorrect ? 'Correct!' : 'Not quite.'}
            </p>
            <p className="text-slate-600 text-sm">{question.explanation}</p>
            <button
              onClick={nextQuestion}
              className="mt-4 px-6 py-2 bg-slate-900 text-white rounded-md font-medium hover:bg-slate-800 transition-colors w-full sm:w-auto"
            >
              Next Question
            </button>
          </div>
        ) : (
          <button
            onClick={checkAnswer}
            disabled={selectedOption === null}
            className="mt-6 w-full px-6 py-3 bg-accent text-white rounded-md font-bold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            Check Answer
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;