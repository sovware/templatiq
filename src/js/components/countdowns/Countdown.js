import { CountdownStyle } from './style';

function Countdown( { value } ) {
	return (
		<CountdownStyle className="helpgent-countdown">
			<div className="helpgent-countdown-content">
				<h2 className="helpgent-countdown-timer-count">{ value }</h2>
				<p className="helpgent-countdown-timer-text">Get Ready</p>
			</div>
		</CountdownStyle>
	);
}

export default Countdown;
