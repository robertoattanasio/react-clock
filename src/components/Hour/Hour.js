// STYLES CSS
import "./Hour.css";

function Hour(props) {
	return (
		<div className="hour-container">
			<div
				className="hour-line"
				style={{
					transform: `rotate(${props.hour * 30 - 90}deg) translateX(50%)`,
				}}
			></div>
		</div>
	);
}

export default Hour;
