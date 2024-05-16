import { Link } from 'react-router-dom';

function Hero() {
	return (
		<div>
			<section id="hero">
				<div className="grid-2-col hero-container">
					<div className="hero-text-block">
						<h1 className="hero-heading sulphur-point-bold">
							unleash the <span className="light-weight">knowledge</span> of
							your mind
						</h1>
						<p className="hero-text ">
							Take your mind to the next stage and check your information
							container level.
						</p>
						<div>
							<Link className="hero-btn" to="quiz">
								start
							</Link>
							<a className="hero-btn" href="#learn">
								more
							</a>
						</div>
					</div>
					<img
						className="hero-img"
						src="./images/hero-book.png"
						alt="books"></img>
				</div>
			</section>
		</div>
	);
}

export default Hero;
