import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Results({ dispatch, points, lastPoints }) {
	let emoji;
	if (points <= 50) {
		emoji = '😮‍💨';
	}
	if (points > 50) {
		emoji = '😄';
	}
	if (points > 80) {
		emoji = '🤩';
	}
	if (points === 100) {
		emoji = '🥳';
	}

	// const circularProgress = document.querySelector('.circular-progress');
	// const progressValue = document.querySelector('.progress-value');

	let progressStartValue = 0,
		speedValue = 20;
	useEffect(
		function () {
			let progress = setInterval(() => {
				points > 0 && progressStartValue++;
				dispatch({ type: 'calculations' });
				// progressValue.textContent = `${progressStartValue}%`;
				// circularProgress.style.background = `conic-gradient(#e63048 ${
				// 	progressStartValue * 3.6
				// }deg, #ededed 0deg)`;
				if (progressStartValue === points) {
					clearInterval(progress);
				}
			}, speedValue);
		},
		[points]
	);

	return (
		<div className="quiz-page-container finished-screen">
			<div className="progress-container">
				<div
					className="circular-progress"
					style={{
						background: `conic-gradient(#e63048 ${
							lastPoints * 3.6
						}deg, #ededed 0deg)`,
					}}>
					<span className="progress-value">{lastPoints}%</span>
				</div>
			</div>
			<div className="finished-score">
				{' '}
				your scored <span className="points">{points}</span> points{emoji}
			</div>
			<div className="restart-btns">
				<button
					className="restart-btn"
					onClick={() => dispatch({ type: 'playAgain' })}>
					play again
				</button>
				<a className="restart-btn" href="/">
					Go home
				</a>
			</div>
		</div>
	);
}

export default Results;
