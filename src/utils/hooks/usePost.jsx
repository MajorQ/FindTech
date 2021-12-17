import { useState, useEffect } from 'react';
import { instance } from '../axios';

export default function usePost(request, url) {
	const [result, setResult] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		if (request == null) return;

		const post = async () => {
			setIsLoading(true);
			setHasError(false);

			try {
				const response = await instance.post(url, request);

				setResult(response.data['result']);
			} catch (error) {
				setHasError(true);
			}

			setIsLoading(false);
		};

		post();
	}, [request, url]);

	return { result, isLoading, hasError };
}
