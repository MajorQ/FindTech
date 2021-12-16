import { PaginationTypes } from '../../utils/consts';
import LaptopListWithButtonScrolling from './LaptopListWithButtonScrolling';
import LaptopListWithInfiniteScrolling from './LaptopListWithInfiniteScrolling';

export default function LaptopList({ filters }) {
	if (filters.pagination === PaginationTypes[1]) {
		return <LaptopListWithInfiniteScrolling price={filters.price} />;
	}

	return <LaptopListWithButtonScrolling price={filters.price} />;
}
