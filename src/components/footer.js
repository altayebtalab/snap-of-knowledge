function Footer() {
	return (
		<section id="footer">
			<div className="flex">
				<div>
					<a className="footer-link" href="/">
						home
					</a>
				</div>
				<div className="flex">
					<a className="footer-link" href="#hero">
						about
					</a>
					<a className="footer-link" href="#hero">
						learn
					</a>
					<a className="footer-link" href="#hero">
						more
					</a>
				</div>
			</div>
			<p className="footer-text ">
				Created by Eltayeb
				{/* <a href="https://www.linkedin.com/in/eltayeb-dawelbait-/">
						<img
							className="footer-icon"
							src="./images/linkedin.png"
							alt="linkedin logo"
							width={15}
							height={15}></img>
					</a>{' '}
					<a href="https://github.com/altayebtalab/">
						<img
							className="footer-icon"
							src="./images/github.png"
							alt="linkedin logo"
							width={15}
							height={15}></img>
					</a> */}
			</p>
		</section>
	);
}

export default Footer;
