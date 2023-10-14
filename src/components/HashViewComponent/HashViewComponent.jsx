import { ReactComponent as Hash } from '../../assets/svg/hash.svg';
import './HashViewComponent.style.scss';

export const HashViewComponent = ({ type, data }) => {
	return (
		<div className="recentsearch-container">
			<h2 className="recentsearch-title">
				{type === 'recentviewed' ? 'Recent Searches' : 'Lasted Data Viewed'}
			</h2>
			<ul className="recentsearch-subtext__list">
				{data.map((e) => {
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
