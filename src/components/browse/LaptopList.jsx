import { PaginationTypes } from '../../utils/consts';
import LaptopListWithButtonScrolling from './LaptopListWithButtonScrolling';
import LaptopListWithInfiniteScrolling from './LaptopListWithInfiniteScrolling';

export default function LaptopList({ paginationType }) {
	if (paginationType === PaginationTypes[1]) {
		return <LaptopListWithInfiniteScrolling />;
	}

	return <LaptopListWithButtonScrolling />;
}
