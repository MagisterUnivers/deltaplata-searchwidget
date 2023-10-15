import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { mockSearchHistory } from '../../constants/mockData';
import { ReactComponent as ShareSVG } from '../../assets/svg/share.svg';
import { ReactComponent as BookmarkSVG } from '../../assets/svg/bookmark.svg';
import { ReactComponent as ArrowRightSVG } from '../../assets/svg/arrow-right-rendered.svg';
import { ReactComponent as CalendarSVG } from '../../assets/svg/calendar.svg';
import { ReactComponent as MapSVG } from '../../assets/svg/map-pin-new.svg';
import britainFlag from '../../assets/image/britain_flag.png';
import '../Filter/Filter.style.scss';
import './PersonCard.style.scss';

const PersonCard = ({ style }) => {
	const [uniqueId1, setUniqueId1] = useState(nanoid());
	const [uniqueId2, setUniqueId2] = useState(nanoid());
	const [uniqueId3, setUniqueId3] = useState(nanoid());
	const [uniqueId4, setUniqueId4] = useState(nanoid());
	const [uniqueId5, setUniqueId5] = useState(nanoid());

	function handleShareClick() {
		const randomText = 'https://www.demowidget.com/search/somelement1/';

		navigator.clipboard.writeText(randomText).then(() => {
			Notify.info('Link added to your clipboard: ' + randomText);
		});
	}

	function handleBookmarkClick() {
		Notify.info('Added to Bookmark');
	}

	return (
		<li
			className={style === 'flex' ? 'search-list__item' : 'main-wrapper'}
			id={uniqueId1}
		>
			<div className="search-list__item-header">
				<div className="search-list__item-subtitle-wrapper">
					<p className="search-list__item-subtitle">30 May, 2023</p>
				</div>
				<div className="search-item__icons">
					<div className="search-item__icons-wrapper">
						<ShareSVG
							width={16}
							height={16}
							className="search-item__icon"
							onClick={() => handleShareClick()}
						/>
					</div>
					<div className="search-item__icons-wrapper">
						<BookmarkSVG
							width={16}
							height={16}
							className="search-item__icon"
							onClick={() => handleBookmarkClick()}
						/>
					</div>
				</div>
			</div>
			<div
				className={style === 'flex' ? '' : 'search-list__grid-container'}
				id={uniqueId2}
			>
				<div
					className={style === 'flex' ? '' : 'search-list__item-body'}
					id={uniqueId3}
				>
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
											<li className="search-item__tags-item search-item__tags-item__more">
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
				</div>
				<div
					className={
						style === 'flex'
							? 'search-item__user-info__wrapper'
							: 'search-item__user-info__wrapper no-margin'
					}
					id={uniqueId4}
				>
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
				<div
					className={
						style === 'flex'
							? 'search-list__item-footer'
							: 'search-list__item-footer button-width'
					}
					id={uniqueId5}
				>
					<button
						type="button"
						aria-label="button to get details about user"
						className="search-list__item-button filter-subtext "
					>
						Details{' '}
						<ArrowRightSVG
							width={16}
							height={16}
							className="search-item__icons"
						/>
					</button>
				</div>
			</div>
		</li>
	);
};

export default PersonCard;
