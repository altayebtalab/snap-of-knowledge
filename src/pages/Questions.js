import { useEffect } from 'react';
import Button from './Button';

function Questions({
	questions,
	dispatch,
	correctAnsIndex,
	index,
	seconds,
	points,
	answer,
}) {
	let options = (
		questions[index]?.incorrect_answers +
		',' +
		questions[index]?.correct_answer
	).split(',');
	const newOptions = options.sort();
	// console.log(options);
	// console.log(newOptions.length);
	// console.log(questions);

	correctAnsIndex = newOptions.indexOf(questions[index].correct_answer);
	useEffect(
		function () {
			if (answer === correctAnsIndex) {
				dispatch({ type: 'addingPoints' });
			}
		},
		[dispatch, answer, correctAnsIndex]
	);

	useEffect(
		function () {
			if (index === 9) return;
			const timeInterval = setInterval(() => {
				dispatch({ type: 'timing' });
			}, 1000);
			return () => clearInterval(timeInterval);
		},
		[dispatch]
	);
	return (
		<div className="quiz-page-container questions-container">
			<div className="flex justify-between">
				<p className="time-length">
					Question <span className="big-font">{index + 1}</span>/
					{questions.length}
				</p>
				<p className={`time-length flex ${seconds < 4 ? 'last-time' : ''}`}>
					<span>
						<img className="timer" src="./images/timer.png" alt="timer"></img>
					</span>{' '}
					{`00:${seconds < 10 ? 0 : ''}${seconds}`}
				</p>
			</div>
			<h3 className="question">
				{questions[index].question.replace(/&quot;/g, '"')}
			</h3>
			<div className="answers-contaier flex-col">
				{newOptions.length < 5 &&
					newOptions.map((option, index) => (
						<button
							className={`answer ${
								answer !== null
									? index === correctAnsIndex
										? 'correct-answer'
										: 'wrong'
									: ' '
							}`}
							key={option}
							onClick={() => dispatch({ type: 'newAns', payload: index })}>
							{option}
						</button>
					))}{' '}
				<Button dispatch={dispatch} answer={answer} index={index} />
			</div>
		</div>
	);
}

export default Questions;
