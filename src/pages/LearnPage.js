import { useEffect, useReducer } from 'react';
import { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import PrePage from './prePage';
import Loader from './Loader';
import Error from './Error';
import Informations from './Informations';
import LearnFinishPage from './LearnFinishPage';

const initialState = {
	questions: [],
	// loading, error, ready, active, finished
	status: 'preQuiz',
	index: 0,
	category: '',
	seconds: 10,
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
		case 'nextQuestion':
			return {
				...state,
				index: state.index + 1,
				answer: null,
				seconds: 10,
			};
		case 'timing':
			return {
				...state,
				seconds: state.seconds > 0 ? state.seconds - 1 : 10,
				index:
					state.seconds === 0 && state.index < 9
						? state.index + 1
						: state.index,
				status:
					state.index === 9 && state.seconds === 0 ? 'finish' : state.status,
			};

		case 'finish':
			return {
				...state,
				status: 'finish',
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

function LearnPage() {
	const [categoryId, setCategoryId] = useState(9);
	const [quizActive, setQuizActive] = useState(false);
	function handleBtn() {
		setQuizActive(true);
		// console.log(questions);
	}
	const [{ questions, status, index, seconds }, dispatch] = useReducer(
		reducer,
		initialState
	);
	useEffect(
		function () {
			function fetchQuestions() {
				fetch(
					`https://opentdb.com/api.php?amount=10&category=${categoryId}&type=boolean`
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
			<div className="learn-page-container">
				{status === 'preQuiz' && (
					<PrePage
						dispatch={dispatch}
						handleBtn={handleBtn}
						setCategoryId={setCategoryId}></PrePage>
				)}
				{status === 'loading' && <Loader></Loader>}
				{status === 'error' && <Error />}
				{status === 'start' && (
					<Informations
						dispatch={dispatch}
						index={index}
						questions={questions}
						seconds={seconds}
					/>
				)}
				{status === 'finish' && <LearnFinishPage />}
			</div>
			<Footer />
		</div>
	);
}

export default LearnPage;
