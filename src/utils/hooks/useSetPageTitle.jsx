import { useEffect } from 'react';

export default function useSetPageTitle(title = 'Findtech') {
	useEffect(() => {
		document.title = title;
	}, [title]);
}
