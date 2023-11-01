import { CountdownStyle } from './style';

function ModalCountdown( { isActive, value } ) {
	if ( ! isActive ) {
		return '';
	}

	return (
		<CountdownStyle className="helpgent-countdown helpgent-countdown-modal">
			<div className="helpgent-countdown-content">
				<h2 className="helpgent-countdown-timer-count">{ value }</h2>
				<p className="helpgent-countdown-timer-text">Get Ready</p>
			</div>
		</CountdownStyle>
	);
}

export default ModalCountdown;
