//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/counter.jsx";

let currentCounter = 0;
let intervalCounter;

function resetCounter() {
	currentCounter = 0;
}

function startCounter() {
	if (currentCounter > 1)
		pass; // Preguntar a pera si pass esta bien, es para evitar bug de +2
	else
		intervalCounter = setInterval(() => {
			currentCounter++;
		}, 1000);
}

function stopCounter() {
	clearInterval(intervalCounter);
	currentCounter = 0;
}

function setTimer() {
	let inputTimer = prompt("Time in seconds: ");
	inputTimer;

	currentCounter = inputTimer;

	let timer = setInterval(() => {
		currentCounter--;
		currentCounter <= 0 ? clearInterval(timer) : null;
		// if (currentCounter <= 0) clearInterval(timer);
	}, 1000);
}

function startApp() {
	setInterval(() => {
		ReactDOM.render(
			<SecondsCounter
				second={currentCounter}
				resetFunction={resetCounter}
				startFunction={startCounter}
				stopFunction={stopCounter}
				timerFunction={setTimer}
			/>,
			document.querySelector("#app")
		);
	}, 1000);
}
startApp();
