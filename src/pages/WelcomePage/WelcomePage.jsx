// import { Filter } from '../../components/Filter/Filter';
// import { MockFilterOptions, mockSortOptions } from '../../constants/mockData';

import { Bulk } from '../../components/Bulk/Bulk';

export const WelcomePage = () => {
	return (
		<section>
			{/* <Filter type="filter" data={MockFilterOptions} />
			<Filter type="sort" data={mockSortOptions} /> */}
			<Bulk />
		</section>
	);
};

export default WelcomePage;
