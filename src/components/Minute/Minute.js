// STYLES CSS
import "./Minute.css";

function Minute(props) {
	return (
		<div className="minute-container">
			<div
				className="minute-line"
				style={{
					transform: `rotate(${props.minute * 6 - 90}deg) translateX(50%)`,
				}}
			></div>
		</div>
	);
}

export default Minute;
