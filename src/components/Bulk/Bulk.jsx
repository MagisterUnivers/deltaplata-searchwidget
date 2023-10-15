import { useNavigate } from 'react-router-dom';
import { ReactComponent as Upload } from '../../assets/svg/upload.svg';
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right.svg';
import { ReactComponent as Hint } from '../../assets/svg/info.svg';
import './Bulk.style.scss';

export const Bulk = () => {
	const navigate = useNavigate();
	return (
		<div className="bulk-uploader">
			<div className="bulk-header__section">
				<div className="bulk-header__container">
					<h2 className="bulk-title">Bulk Upload</h2>
					<Hint width={14} height={14} />
				</div>
				<div className="bulk-header__container">
					<ArrowRight
						width={16}
						height={16}
						style={{ cursor: 'pointer' }}
						onClick={() => navigate('/home')}
					/>
				</div>
			</div>
			<div className="bulk-uploader__container">
				<Upload width={32} height={32} />
				<p className="bulk-subtext">Max 20MB</p>
			</div>
		</div>
	);
};
