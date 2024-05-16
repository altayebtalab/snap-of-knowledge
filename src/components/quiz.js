import { Link } from 'react-router-dom';

function Quiz() {
	return (
		<section id="quiz">
			<div className="quiz-container flex-col">
				<div>
					<h2 className="quiz-heading">ready to take a quiz</h2>
					<Link to="quiz">
						<button className="quiz-btn">let's go</button>
					</Link>
				</div>
				<div>
					<h2 className="quiz-heading">
						or you can add more information before you start
					</h2>
					<div className="quiz-learn-container grid-2-col">
						<img
							className="quiz-pic"
							src="./images/happy-brain.png"
							alt="book stack"></img>

						<div>
							<a className="quiz-learn-btn quiz-btn" href="/learn">
								yes i want
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Quiz;
