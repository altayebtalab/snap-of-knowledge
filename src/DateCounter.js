import { useReducer, useState } from 'react';

const initialState = { count: 0, step: 1 };
function reducer(state, action) {
	switch (action.type) {
		case 'down':
			return { ...state, count: state.count - state.step };
		case 'up':
			return { ...state, count: state.count + state.step };
		case 'define count':
			return { ...state, count: action.payload };
		case 'define step':
			return { ...state, step: action.payload };
		case 'reset':
			return initialState;
		default:
			throw new Error('Uknown Action');
	}
}

function DateCounter() {
	// const [count, setCount] = useState(0);
	// const [step, setStep] = useState(1);

	const [state, dispatch] = useReducer(reducer, initialState);
	const { count, step } = state;

	// This mutates the date object.
	const date = new Date('june 21 2024');
	date.setDate(date.getDate() + count);

	const dec = function () {
		// setCount((count) => count - 1);
		// setCount((count) => count - step);
		dispatch({ type: 'down' });
	};

	const inc = function () {
		// setCount((count) => count + 1);
		// setCount((count) => count + step);
		dispatch({ type: 'up' });
	};

	const defineCount = function (e) {
		// setCount(Number(e.target.value));
		dispatch({ type: 'define count', payload: Number(e.target.value) });
	};

	const defineStep = function (e) {
		// setStep(Number(e.target.value));
		dispatch({ type: 'define step', payload: Number(e.target.value) });
	};

	const reset = function () {
		// setCount(0);
		// setStep(1);
		dispatch({ type: 'reset' });
	};

	return (
		<div className="counter">
			<div>
				<input
					type="range"
					min="0"
					max="10"
					value={step}
					onChange={defineStep}
				/>
				<span>{step}</span>
			</div>

			<div>
				<button onClick={dec}>-</button>
				<input value={count} onChange={defineCount} />
				<button onClick={inc}>+</button>
			</div>

			<p>{date.toDateString()}</p>

			<div>
				<button onClick={reset}>Reset</button>
			</div>
		</div>
	);
}
export default DateCounter;
