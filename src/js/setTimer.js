import { currentCounter } from "./index.js";

export function setTimer() {
	let inputTimer = prompt("Time in seconds: ");
	inputTimer;

	currentCounter = inputTimer;

	let timer = setInterval(() => {
		currentCounter--;
		currentCounter <= 0 ? clearInterval : pass;
		if (currentCounter <= 0) clearInterval(timer);
	}, 1000);
}
