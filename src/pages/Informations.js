import { useEffect } from 'react';

function Informations({ questions, index, seconds, dispatch }) {
	useEffect(
		function () {
			if (index === 9 && seconds === 0) return;
			const timeInterval = setInterval(() => {
				dispatch({ type: 'timing' });
			}, 1000);
			return () => clearInterval(timeInterval);
		},
		[dispatch]
	);
	return (
		<div className="questions-container quiz-page-container">
			<div className="flex justify-between">
				<p className="time-length">
					Information {index + 1}/{questions.length}
				</p>
				<p className={`time-length ${seconds < 4 ? 'last-time' : ''}`}>
					{index === 9 && seconds === 0
						? ''
						: `Time left: ${seconds < 10 ? 0 : ''}${seconds} seconds`}
				</p>
			</div>
			<h3 className="question">
				{questions[index].question.replace(/&quot;/g, '"')}
			</h3>
			<p
				className={`learn-answer ${
					questions[index].correct_answer === 'True'
						? 'green-color'
						: 'red-color'
				}`}>
				{questions[index].correct_answer}
			</p>

			<a className="return-btn" href="/">
				return
			</a>
		</div>
	);
}

export default Informations;
