import React, { useState, useEffect } from "react";

// STYLES CSS
import "./App.css";

// COMPONENTS
import Clock from "./components/Clock/Clock";
import Hour from "./components/Hour/Hour";
import Minute from "./components/Minute/Minute";
import Second from "./components/Second/Second";

function App() {
	const [hour, setHour] = useState(0);
	const [minute, setMinute] = useState(0);
	const [second, setSecond] = useState(0);

	useEffect(() => {
		let time = new Date();
		let second = time.getSeconds();
		let minute = time.getMinutes();
		let hour = time.getHours();
		setSecond(second);
		setMinute(minute);
		setHour(hour);

		setInterval(() => {
			// SET SECONDS
			let time = new Date();
			second = time.getSeconds();
			setSecond(second);

			// SET MINUTES
			let minute = time.getMinutes();
			setMinute(minute);

			// SET HOURS
			let hour = time.getHours();
			setHour(hour);
		}, 1000);
	}, []);

	return (
		<div className="App">
			<Clock>
				<Hour hour={hour} />
				<Minute minute={minute} />
				<Second second={second} />
			</Clock>
		</div>
	);
}

export default App;
