import { useState, useEffect } from 'react';
import { instance } from '../axios';
import { Url } from '../consts';

export default function useFetchPrediction(request) {
	const [result, setResult] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		if (request == null) return;

		async function predict() {
			setIsLoading(true);
			setHasError(false);

			try {
				const response = await instance.post(Url.predict, request);

				setResult(response.data['result']);
			} catch (error) {
				setHasError(true);
			}

			setIsLoading(false);
		}

		return predict();
	}, [request]);

	return { result, isLoading, hasError };
}
