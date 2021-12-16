import { useEffect, useState } from 'react';
import axios from 'axios';
import { instance } from '../axios';
import { Url } from '../consts';

export default function useFetchLaptops(page, limit, shouldRefresh = true) {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);
	const [data, setData] = useState([]);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			setHasError(false);

			let cancel;

			try {
				const response = await instance.get(Url.laptops, {
					params: { page, limit },
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

			return () => cancel();
		}

		return fetchData();
	}, [page, limit, shouldRefresh]);

	return { isLoading, hasError, data, totalPages };
}
