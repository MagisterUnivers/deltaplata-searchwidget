import { Filter } from '../../components/Filter/Filter';
import { Bulk } from '../../components/Bulk/Bulk';
import { HashViewComponent } from '../../components/HashViewComponent/HashViewComponent';
import {
	mockSortOptions,
	MockFilterOptions,
	mockMetaTags
} from '../../constants/mockData';
import { Hero } from '../../components/Hero/Hero';
import { Title } from '../../components/Title/Title';
import { SpecialFilter } from '../../components/SpecialFilter/SpecialFilter';
import '../../components/Container/Container.style.scss';
import './WelcomePage.style.scss';
import '../../components/Section/Section.style.scss';

export const WelcomePage = () => {
	return (
		<section className="section">
			<div className="container no-flex">
				<div className="title-wrapper push-content">
					<div className="title-wrapper no-wrap">
						<Title text="Welcome" />
					</div>
					<div className="title-wrapper no-wrap place-to__end">
						<Filter type="filter" data={MockFilterOptions} />
						<Filter type="sort" data={mockSortOptions} />
					</div>
				</div>
				<div className="hero-wrapper">
					<SpecialFilter />
					<Hero />
					<div className="widgets-wrapper">
						<Bulk />
						<HashViewComponent type="recentviewed" data={mockMetaTags} />
						<HashViewComponent type="lastvisited" data={mockMetaTags} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default WelcomePage;
