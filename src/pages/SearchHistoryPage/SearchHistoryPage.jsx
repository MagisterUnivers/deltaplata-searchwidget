import { Title } from '../../components/Title/Title';
import { DateFilter } from '../../components/DateFilter/DateFilter';
import { Button } from '../../components/Button/Button';
import '../../components/Section/Section.style.scss';
import './SearchHistoryPage.style.scss';

export const SearchHistoryPage = () => {
	return (
		<section className="section" aria-label="search history section">
			<div className="container">
				<div className="hero-title__container">
					<Title text="History" />
					<DateFilter />
					<Button text="Clear all history" />
				</div>
			</div>
		</section>
	);
};
