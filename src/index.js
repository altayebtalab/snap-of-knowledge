import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import QuizPage from './pages/QuizPage.js';
import LearnPage from './pages/LearnPage.js';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: 'quiz',
		element: <QuizPage />,
	},
	{
		path: 'learn',
		element: <LearnPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
