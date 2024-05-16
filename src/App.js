import Hero from './components/hero';
import About from './components/about';
import Learn from './components/learn';
import More from './components/more';
import Quiz from './components/quiz';
import Footer from './components/footer';
import Header from './components/header';
import './index.css';
import './queries.css';
function App() {
	return (
		<div id="app">
			<Header></Header>
			<Hero></Hero>
			<About></About>
			<Learn></Learn>
			<More></More>
			<Quiz></Quiz>
			<Footer></Footer>
		</div>
	);
}

export default App;
