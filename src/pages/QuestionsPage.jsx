import NavBar from '../components/core/NavBar';

const QuestionsPage = () => {
	return (
		<div>
			{/* TODO: refactor */}
			<header className="grid grid-cols-2 gap-y-16 px-80 bg-gradient-to-r from-black to-accent_dark">
				<NavBar />
			</header>

			<main className="grid grid-cols-2"></main>
		</div>
	);
};

export default QuestionsPage;
