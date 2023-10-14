import { Select } from '../Select/Select';
import './Filter.style.scss';

export const Filter = ({ type, data }) => {
	return (
		<div className="filter-container" style={{ marginTop: '100px' }}>
			<p className="filter-subtext">
				{type === 'filter' ? 'Filter by' : 'Sort by'}
			</p>
			{/* <select className="filter-select__menu">
				<option value="default">
					{(() => {
						switch (type) {
							case 'filter':
								return 'Type';
							case 'sort':
								return 'Lasted Updated';
							case 'country':
								return 'Netherlands';
							default:
								return 'Type';
						}
					})()}
				</option>
				{data?.map((data) => {
					return (
						<option value={data} key={data}>
							{data}
						</option>
					);
				})}
			</select> */}
			<Select type={type} data={data} />
		</div>
	);
};
