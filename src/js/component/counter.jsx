import React from "react";

export default function SecondsCounter(props) {
	return (
		<div className="container">
			<div className="d-flex justify-content-center align-items-center vh-100">
				<div className="card border-dark shadow">
					<div className="card-body">
						<h5 className="card-title">
							<span className="text-danger">i</span>Timer
							{/* <i className="text-secondary fa fa-clock"></i> */}
						</h5>

						<h1 className="card-text d-flex justify-content-center">
							{props.second}
						</h1>

						<div className="d-flex gap-2 pt-3">
							<button
								className=" btn btn-dark rounded-5"
								onClick={props.resetFunction}>
								<i className="fa-solid fa-rotate-left"></i>
								{/* <i className="fa fa-pause"></i> */}
							</button>
							<button
								className=" btn btn-dark rounded-5"
								onClick={props.startFunction}>
								<i className="fa fa-play"></i>
							</button>
							<button
								className=" btn btn-dark rounded-5"
								onClick={props.stopFunction}>
								<i class="fa fa-stop"></i>
							</button>

							<button
								className=" btn btn-danger rounded-5"
								onClick={props.timerFunction}>
								<i className="fa-solid fa-stopwatch"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
