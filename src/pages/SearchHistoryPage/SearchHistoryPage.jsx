import { Title } from '../../components/Title/Title';
import { DateFilter } from '../../components/DateFilter/DateFilter';
import { Button } from '../../components/Button/Button';
import '../../components/Section/Section.style.scss';
import './SearchHistoryPage.style.scss';
import '../WelcomePage/WelcomePage.style.scss';

export const SearchHistoryPage = () => {
	return (
		<section className="section" aria-label="search history section">
			<div className="container no-flex">
				<div className="hero-title__container push-content">
					<Title text="History" />
					<DateFilter />
					<Button text="Clear all history" />
				</div>
				<div className="horizontal-line push-content" />
			</div>
		</section>
	);
};
