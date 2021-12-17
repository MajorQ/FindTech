import { useEffect, useState } from 'react';
import axios from 'axios';
import { instance } from '../axios';

export default function useFetchPagination(
	url,
	page,
	limit,
	filters,
	shouldRefresh = true
) {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);
	const [data, setData] = useState([]);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		let cancel;

		const fetchPagination = async () => {
			setIsLoading(true);
			setHasError(false);

			try {
				const response = await instance.get(url, {
					params: { page, limit, ...filters },
					cancelToken: new axios.CancelToken(
						(cancelToken) => (cancel = cancelToken)
					),
				});

				if (shouldRefresh) {
					setData(response.data['docs']);
				} else {
					setData((prevData) => {
						return [...prevData, ...response.data['docs']];
					});
				}

				setTotalPages(response.data['totalPages']);
			} catch (error) {
				if (axios.isCancel(error)) return;
				setHasError(true);
			}

			setIsLoading(false);
		};

		fetchPagination();

		if (cancel != null) return () => cancel();
	}, [url, page, limit, shouldRefresh, filters]);

	return { isLoading, hasError, data, totalPages };
}
