import { mockSearchHistory } from '../../constants/mockData';
import { ReactComponent as ShareSVG } from '../../assets/svg/share.svg';
import { ReactComponent as BookmarkSVG } from '../../assets/svg/bookmark.svg';
import { ReactComponent as ArrowRightSVG } from '../../assets/svg/arrow-right-white.svg';
import { ReactComponent as CalendarSVG } from '../../assets/svg/calendar.svg';
import { ReactComponent as MapSVG } from '../../assets/svg/map-pin-new.svg';
import britainFlag from '../../assets/image/britain_flag.png';
import '../Filter/Filter.style.scss';
import './PersonCard.style.scss';

const PersonCard = ({ name, tag, nationality, birthdate, adrress }) => {
	return (
		<li className="search-list__item">
			<div className="search-list__item-header">
				<div className="search-list__item-subtitle-wrapper">
					<p className="search-list__item-subtitle">30 May, 2023</p>
				</div>
				<div className="search-item__icons">
					<div className="search-item__icons-wrapper">
						<ShareSVG width={16} height={16} />
					</div>
					<div className="search-item__icons-wrapper">
						<BookmarkSVG width={16} height={16} />
					</div>
				</div>
			</div>
			<div className="search-list__item-body">
				<div className="search-item__name-wrapper">
					<p className="search-item__name-subtext filter-subtext">Person</p>
					<h2 className="search-item__name-title">Nora Frey Draeger</h2>
				</div>
				<ul className="search-item__tags-list">
					{mockSearchHistory.map((item) => {
						if (item.name === 'Nora Frey Draeger') {
							const tags = item.tags;

							if (tags.length > 4) {
								const remainingTags = tags.slice(4);
								return (
									<>
										{tags.slice(0, 4).map((tag, tagIndex) => (
											<li className="search-item__tags-item" key={tagIndex}>
												<p className="search-item__tag search-item__name-subtext filter-subtext">
													{tag}
												</p>
											</li>
										))}
										<li
											className="search-item__tags-item search-item__tags-item__more"
											key={remainingTags}
										>
											<p className="search-item__tag search-item__name-subtext filter-subtext">
												+{remainingTags.length} More
											</p>
										</li>
									</>
								);
							} else {
								return tags.map((tag, tagIndex) => (
									<li className="search-item__tags-item" key={tagIndex}>
										<p className="search-item__tag search-item__name-subtext filter-subtext">
											{tag}
										</p>
									</li>
								));
							}
						}
						return null;
					})}
				</ul>
				<div className="search-item__user-info__wrapper">
					{mockSearchHistory.map((item, index) => {
						const { nationality, birthdate, address } = item;

						if (item.name === 'Nora Frey Draeger') {
							return (
								<>
									<div className="search-item__flex" key={nationality}>
										<img
											src={
												nationality === 'British' ? britainFlag : 'default flag'
											}
											alt="british national flag"
											width={16}
											height={16}
										/>
										<p className="filter-subtext">{nationality}</p>
									</div>
									<div className="search-item__flex" key={birthdate}>
										<CalendarSVG width={16} height={16} />
										<p className="filter-subtext">{birthdate}</p>
									</div>
									<div className="search-item__flex" key={address}>
										<MapSVG width={16} height={16} />
										<p className="filter-subtext">{address}</p>
									</div>
								</>
							);
						}
						return null;
					})}
				</div>
			</div>
			<div className="search-list__item-footer">
				<button
					type="button"
					aria-label="button to get details about user"
					className="search-list__item-button filter-subtext"
				>
					Details <ArrowRightSVG width={16} height={16} />
				</button>
			</div>
		</li>
	);
};

export default PersonCard;
