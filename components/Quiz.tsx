'use client';

import { useState, useCallback, useMemo } from 'react';
import { quizData } from '@/lib/quiz-data';

// Function to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
	const newArray = [...array];
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray;
};

export default function Quiz() {
	const [questions, setQuestions] = useState(quizData);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
	const [showExplanation, setShowExplanation] = useState(false);
	const [score, setScore] = useState(0);
	const [answeredQuestions, setAnsweredQuestions] = useState(0);
	const [quizFinished, setQuizFinished] = useState(false);
	const [filter, setFilter] = useState<string>('all');

	const currentQuestion = questions[currentQuestionIndex];
	const categories = useMemo(
		() => ['all', ...Array.from(new Set(quizData.map((q) => q.category)))],
		[],
	);

	const filteredQuestions = useMemo(
		() =>
			filter === 'all'
				? questions
				: questions.filter((q) => q.category === filter),
		[filter, questions],
	);

	const handleAnswerSelect = (index: number) => {
		if (showExplanation) return;

		if (currentQuestion.type === 'multiple-select') {
			if (selectedAnswers.includes(index)) {
				setSelectedAnswers(selectedAnswers.filter((i) => i !== index));
			} else {
				setSelectedAnswers([...selectedAnswers, index]);
			}
		} else {
			setSelectedAnswers([index]);
		}
	};

	const handleSubmit = () => {
		if (selectedAnswers.length === 0) return;

		const isCorrect =
			selectedAnswers.length === currentQuestion.correctAnswers.length &&
			selectedAnswers.every((answer) =>
				currentQuestion.correctAnswers.includes(answer),
			);

		if (isCorrect) {
			setScore(score + 1);
		}

		setShowExplanation(true);
		setAnsweredQuestions(answeredQuestions + 1);
	};

	const handleNext = () => {
		if (currentQuestionIndex < filteredQuestions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedAnswers([]);
			setShowExplanation(false);
		} else {
			setQuizFinished(true);
		}
	};

	const restartQuiz = useCallback(() => {
		setQuestions(shuffleArray(quizData));
		setCurrentQuestionIndex(0);
		setSelectedAnswers([]);
		setShowExplanation(false);
		setScore(0);
		setAnsweredQuestions(0);
		setQuizFinished(false);
	}, []);

	const changeFilter = (newFilter: string) => {
		setFilter(newFilter);
		setCurrentQuestionIndex(0);
		setSelectedAnswers([]);
		setShowExplanation(false);
		setScore(0);
		setAnsweredQuestions(0);
		setQuizFinished(false);
	};

	if (!questions || questions.length === 0) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				Učitavanje...
			</div>
		);
	}

	if (!currentQuestion) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				Nema pitanja
			</div>
		);
	}

	if (quizFinished) {
		const percentage = Math.round((score / answeredQuestions) * 100);
		return (
			<div className="max-w-4xl mx-auto p-6">
				<div className="bg-white rounded-lg shadow-lg p-8 text-center">
					<h2 className="text-3xl font-bold mb-4">Kviz završen!</h2>
					<div className="text-6xl font-bold mb-4 text-blue-600">
						{percentage}%
					</div>
					<p className="text-xl mb-2">
						Točno odgovorenih: {score} od {answeredQuestions}
					</p>
					<p className="text-gray-600 mb-8">
						{percentage >= 90
							? '🎉 Odličan rezultat!'
							: percentage >= 70
								? '👍 Dobar rezultat!'
								: percentage >= 50
									? '📚 Treba još vježbe!'
									: '💪 Nemoj odustati, pokušaj ponovno!'}
					</p>
					<button
						onClick={restartQuiz}
						className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
					>
						Ponovi kviz
					</button>
				</div>
			</div>
		);
	}

	const isAnswerCorrect = (index: number) => {
		return currentQuestion.correctAnswers.includes(index);
	};

	const getAnswerClassName = (index: number) => {
		const baseClass = 'p-4 rounded-lg border-2 cursor-pointer transition-all ';

		if (!showExplanation) {
			if (selectedAnswers.includes(index)) {
				return baseClass + 'border-blue-600 bg-blue-50';
			}
			return (
				baseClass + 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
			);
		}

		// Show explanation
		if (isAnswerCorrect(index)) {
			return baseClass + 'border-green-600 bg-green-50';
		}
		if (selectedAnswers.includes(index) && !isAnswerCorrect(index)) {
			return baseClass + 'border-red-600 bg-red-50';
		}
		return baseClass + 'border-gray-300 bg-gray-100';
	};

	return (
		<div className="max-w-4xl mx-auto p-6">
			{/* Header with stats and filter */}
			<div className="mb-6">
				<div className="flex justify-between items-center mb-4">
					<div className="text-sm text-gray-600">
						Pitanje {currentQuestionIndex + 1} od {filteredQuestions.length}
					</div>
					<div className="text-sm font-semibold text-blue-600">
						Rezultat: {score}/{answeredQuestions}
					</div>
				</div>

				{/* Category filter */}
				<div className="flex flex-wrap gap-2 mb-4">
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => changeFilter(cat)}
							className={`px-3 py-1 rounded-full text-sm transition-colors ${
								filter === cat
									? 'bg-blue-600 text-white'
									: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
							}`}
						>
							{cat === 'all' ? 'Sve kategorije' : cat}
						</button>
					))}
				</div>

				{/* Progress bar */}
				<div className="w-full bg-gray-200 rounded-full h-2">
					<div
						className="bg-blue-600 h-2 rounded-full transition-all duration-300"
						style={{
							width: `${((currentQuestionIndex + 1) / filteredQuestions.length) * 100}%`,
						}}
					/>
				</div>
			</div>

			{/* Question card */}
			<div className="bg-white rounded-lg shadow-lg p-8 mb-6">
				<div className="mb-2">
					<span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
						{currentQuestion.category}
					</span>
					<span className="ml-2 inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-semibold">
						{currentQuestion.type === 'multiple-select'
							? 'Više točnih odgovora'
							: currentQuestion.type === 'true-false'
								? 'Točno/Netočno'
								: 'Jedan točan odgovor'}
					</span>
				</div>

				<h2 className="text-2xl font-bold mb-6 text-gray-800">
					{currentQuestion.question}
				</h2>

				{/* Options */}
				<div className="space-y-3 mb-6">
					{currentQuestion.options.map((option, index) => (
						<div
							key={index}
							onClick={() => handleAnswerSelect(index)}
							className={getAnswerClassName(index)}
						>
							<div className="flex items-center">
								<div className="shrink-0 w-6 h-6 rounded-full border-2 border-current mr-3 flex items-center justify-center">
									{selectedAnswers.includes(index) && (
										<div className="w-3 h-3 rounded-full bg-current" />
									)}
								</div>
								<span className="flex-1">{option}</span>
								{showExplanation && isAnswerCorrect(index) && (
									<span className="ml-2 text-green-600 font-bold">✓</span>
								)}
								{showExplanation &&
									selectedAnswers.includes(index) &&
									!isAnswerCorrect(index) && (
										<span className="ml-2 text-red-600 font-bold">✗</span>
									)}
							</div>
						</div>
					))}
				</div>

				{/* Explanation */}
				{showExplanation && currentQuestion.explanation && (
					<div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
						<p className="font-semibold text-blue-900 mb-1">Objašnjenje:</p>
						<p className="text-blue-800">{currentQuestion.explanation}</p>
					</div>
				)}

				{/* Buttons */}
				<div className="flex justify-between">
					{!showExplanation ? (
						<button
							onClick={handleSubmit}
							disabled={selectedAnswers.length === 0}
							className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
								selectedAnswers.length === 0
									? 'bg-gray-300 text-gray-500 cursor-not-allowed'
									: 'bg-blue-600 text-white hover:bg-blue-700'
							}`}
						>
							Provjeri odgovor
						</button>
					) : (
						<button
							onClick={handleNext}
							className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
						>
							{currentQuestionIndex < filteredQuestions.length - 1
								? 'Sljedeće pitanje'
								: 'Završi kviz'}
						</button>
					)}

					<button
						onClick={restartQuiz}
						className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
					>
						Resetiraj kviz
					</button>
				</div>
			</div>
		</div>
	);
}
