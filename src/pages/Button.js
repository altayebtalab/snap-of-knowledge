function Button({ index, answer, dispatch }) {
	if (index < 9)
		return (
			<button
				disabled={answer === null ? true : false}
				className={`next-btn ${answer != null ? 'background-color-btn' : ''}`}
				onClick={() => {
					answer != null && dispatch({ type: 'nextQuestion' });
				}}>
				Next
			</button>
		);
	if (index === 9)
		return (
			<button
				className={`next-btn ${answer != null ? 'background-color-btn' : ''}`}
				onClick={() => dispatch({ type: 'finish' })}>
				Finish
			</button>
		);
}

export default Button;
