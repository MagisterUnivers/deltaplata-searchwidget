// import { Filter } from '../../components/Filter/Filter';
// import { MockFilterOptions, mockSortOptions } from '../../constants/mockData';
// import { Bulk } from '../../components/Bulk/Bulk';
// import { RecentSearch } from '../../components/RecentSearch/RecentSearch';
import { Hero } from '../../components/Hero/Hero';

export const WelcomePage = () => {
	return (
		<section>
			{/* <Filter type="filter" data={MockFilterOptions} />
			<Filter type="sort" data={mockSortOptions} /> */}
			{/* <RecentSearch /> */}
			<Hero />
		</section>
	);
};

export default WelcomePage;
