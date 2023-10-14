import './Select.style.scss';

export const Select = ({ type, data }) => {
	return (
		<select className="filter-select__menu">
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
		</select>
	);
};
