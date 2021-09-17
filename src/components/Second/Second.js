// STYLES CSS
import "./Second.css";

function Second(props) {
	return (
		<div className="second-container">
			<div
				className="second-line"
				style={{
					transform: `rotate(${props.second * 6 - 90}deg) translateX(50%)`,
				}}
			></div>
		</div>
	);
}

export default Second;
