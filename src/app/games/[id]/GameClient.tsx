'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface GameClientProps {
  gameId: string;
}

export default function GameClient({ gameId }: GameClientProps) {
  const router = useRouter();
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [score, setScore] = useState(0);

  // Mock questions data - in a real app, this would come from the API
  const questions = [
    {
      id: 1,
      question: 'What command is used to initialize a new Git repository?',
      options: ['git init', 'git start', 'git create', 'git new'],
      correctAnswer: 0,
    },
    {
      id: 2,
      question: 'Which command is used to stage changes for commit?',
      options: ['git stage', 'git add', 'git commit', 'git push'],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: 'What command shows the working tree status?',
      options: ['git check', 'git tree', 'git status', 'git info'],
      correctAnswer: 2,
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Calculate score
    const correctAnswers = selectedAnswers.reduce((count, answer, index) => {
      return count + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
    const finalScore = Math.round((correctAnswers / questions.length) * 100);
    setScore(finalScore);
    setGameCompleted(true);
    setIsSubmitting(false);
  };

  if (gameCompleted) {
    return (
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Game Completed!
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Your score: {score}%
              </p>
              <button
                onClick={() => router.push('/games')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Back to Games
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </h2>
                <span className="text-sm text-gray-500">
                  Game ID: {gameId}
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-indigo-600 rounded-full"
                  style={{
                    width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {currentQuestion.question}
            </h3>

            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
                    selectedAnswers[currentQuestionIndex] === index
                      ? 'bg-indigo-50 border-indigo-500'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {currentQuestionIndex === questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={
                    selectedAnswers.length !== questions.length || isSubmitting
                  }
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={
                    selectedAnswers[currentQuestionIndex] === undefined
                  }
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 