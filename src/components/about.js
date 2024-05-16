function About() {
	return (
		<section id="about" className="grid-2-col">
			<img
				className="about-pic"
				src="./images/Welcome-kid.png"
				width={200}
				alt="welcome girl"></img>
			<div className="welcome-text">
				<h2>welcome to quiz world</h2>
				<p className="text">
					We have successfully created high quality quiz content across a large
					variety of topics to enjoy your mind by testing your memory
					informations and there is still a lot coming.{' '}
				</p>
			</div>
		</section>
	);
}

export default About;
