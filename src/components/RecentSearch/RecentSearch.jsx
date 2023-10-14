import { mockMetaTags } from '../../constants/mockData';
import { ReactComponent as Hash } from '../../assets/svg/hash.svg';
import './RecentSearch.style.scss';

export const RecentSearch = () => {
	return (
		<div className="recentsearch-container">
			<h2 className="recentsearch-title">Recent Searches</h2>
			<ul className="recentsearch-subtext__list">
				{mockMetaTags.map((e) => {
					return (
						<li key={e} className="recentsearch-list__item">
							<Hash width={16} height={16} />{' '}
							<p className="recentsearch-subtitle">{e}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
