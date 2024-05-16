import { useEffect, useReducer, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import PrePage from './prePage';
import Loader from './Loader';
import Questions from './Questions';
import Error from './Error';
import Results from './Results';

const initialState = {
	questions: [],
	// loading, error, ready, active, finished
	status: 'preQuiz',
	answer: null,
	index: 0,
	category: '',
	seconds: 15,
	correctAnsIndex: null,
	points: 0,
	lastPoints: 0,
};

function reducer(state, action) {
	switch (action.type) {
		case 'topicChoosing':
			return {
				...state,
				status: 'preQuiz',
			};
		case 'dataFetching':
			return {
				...state,
				status: 'loading',
			};
		case 'dataReceived':
			return {
				...state,
				questions: action.payload,
				status: 'start',
			};
		case 'dataFailed':
			return {
				...state,
				status: 'error',
			};
		case 'start':
			return {
				...state,
				status: 'active',
			};
		case 'newAns':
			return {
				...state,
				answer: action.payload,
			};
		case 'nextQuestion':
			return {
				...state,
				index: state.index + 1,
				answer: null,
				seconds: 15,
			};
		case 'timing':
			return {
				...state,
				seconds: state.seconds > 0 ? state.seconds - 1 : 15,
				index:
					state.seconds === 0 && state.index < 9
						? state.index + 1
						: state.index,
				answer: state.seconds === 0 ? null : state.answer,
				status:
					state.index === 9 && state.seconds === 0 ? 'finish' : state.status,
			};
		case 'addingPoints':
			return {
				...state,
				points: state.points + 10,
			};
		case 'finish':
			return {
				...state,
				status: 'finish',
			};
		case 'calculations':
			return {
				...state,
				lastPoints: state.points > 0 && state.lastPoints + 1,
			};
		case 'playAgain':
			return {
				...initialState,
				questions: state.questions,
				status: 'start',
			};
		case 'change':
			return {
				...initialState,
				questions: state.questions,
			};
		default:
			throw new Error('error');
	}
}

function QuizPage() {
	const [
		{
			questions,
			status,
			answer,
			index,
			seconds,
			correctAnsIndex,
			points,
			lastPoints,
		},
		dispatch,
	] = useReducer(reducer, initialState);
	const [categoryId, setCategoryId] = useState(9);
	const [quizActive, setQuizActive] = useState(false);

	const options = [];

	function handleBtn() {
		setQuizActive(true);
		// console.log(questions);
	}

	useEffect(
		function () {
			function fetchQuestions() {
				fetch(
					`https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=easy`
				)
					.then((res) => res.json())
					.then((data) =>
						dispatch({ type: 'dataReceived', payload: data.results })
					)
					.catch((err) => dispatch({ type: 'dataFailed' }));
			}
			quizActive && fetchQuestions();
		},
		[categoryId, quizActive]
	);

	return (
		<div>
			<Header />
			{status === 'preQuiz' && (
				<PrePage
					dispatch={dispatch}
					handleBtn={handleBtn}
					setCategoryId={setCategoryId}></PrePage>
			)}
			{status === 'loading' && <Loader></Loader>}
			{status === 'error' && <Error />}
			{status === 'start' && (
				<Questions
					questions={questions}
					answer={answer}
					correctAnsIndex={correctAnsIndex}
					index={index}
					seconds={seconds}
					points={points}
					dispatch={dispatch}></Questions>
			)}
			{status === 'finish' && (
				<Results points={points} dispatch={dispatch} lastPoints={lastPoints} />
			)}
			<Footer />
		</div>
	);
}

export default QuizPage;
