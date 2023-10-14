// import { Filter } from '../../components/Filter/Filter';
// import { MockFilterOptions, mockSortOptions } from '../../constants/mockData';
// import { Bulk } from '../../components/Bulk/Bulk';
// import { HashViewComponent } from '../../components/HashViewComponent/HashViewComponent';
// import { mockMetaTags } from '../../constants/mockData';
// import { Hero } from '../../components/Hero/Hero';

import { SpecialFilter } from '../../components/SpecialFilter/SpecialFilter';

export const WelcomePage = () => {
	return (
		<section>
			{/* <Filter type="filter" data={MockFilterOptions} />
			<Filter type="sort" data={mockSortOptions} /> */}
			{/* <Bulk /> */}
			{/* {/* <HashViewComponent type="recentviewed" data={mockMetaTags} /> */}
			{/* <HashViewComponent type="lastvisited" data={mockMetaTags} /> */}
			{/* <Hero /> */}
			<SpecialFilter />
		</section>
	);
};

export default WelcomePage;
