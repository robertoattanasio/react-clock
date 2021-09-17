import "./Clock.css";

function Clock(props) {
	return <div className="clock-container">{props.children}</div>;
}

export default Clock;
