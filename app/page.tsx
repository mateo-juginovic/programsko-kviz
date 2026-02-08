import Quiz from '@/components/Quiz';
import { quizData } from '@/lib/quiz-data';

export default function Home() {
	return (
		<div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
			<header className="bg-white shadow-sm border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-6 py-6">
					<h1 className="text-3xl font-bold text-gray-800">
						📚 Kviz - Arhitektura Softvera
					</h1>
					<p className="text-gray-600 mt-2">
						Testirajte svoje znanje iz arhitekture softvera
					</p>
				</div>
			</header>
			<main className="py-8">
				<Quiz />
			</main>
			<footer className="bg-white border-t border-gray-200 mt-12">
				<div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-600 text-sm">
					<p>Programsko inženjerstvo • {quizData.length} pitanja</p>
					<p className="mt-2 text-xs text-gray-500">
						Kategorije: Arhitektura, UML, Testiranje, DevOps, Kvaliteta softvera
					</p>
				</div>
			</footer>
		</div>
	);
}
