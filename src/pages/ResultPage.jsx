import { Redirect } from 'react-router-dom';
import NavBar from '../components/core/NavBar';
import { ResultBody } from '../components/result/ResultBody';
import { ResultFeedbackForm } from '../components/result/ResultFeedbackForm';
import { ResultRecommendations } from '../components/result/ResultRecommendations';
import { Url } from '../utils/consts';
import usePost from '../utils/hooks/usePost';
import useSetPageTitle from '../utils/hooks/useSetPageTitle';

const ResultPage = (props) => {
	useSetPageTitle();

	const request = props.location.state;

	const { isLoading, result } = usePost(request, Url.predict);

	if (request == null) {
		return <Redirect to="/question" />;
	}

	if (isLoading || result == null) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<NavBar />
			<div className="bg-gray-100 px-4 md:px-0">
				<div className="md:grid md:grid-cols-8 md:gap-x-4 py-8">
					<ResultBody result={result[0]} />
					<ResultFeedbackForm />
				</div>
				<ResultRecommendations laptops={result.slice(1)} />
			</div>
		</>
	);
};

export default ResultPage;
