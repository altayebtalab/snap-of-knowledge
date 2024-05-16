function More() {
	return (
		<section id="more">
			<div className="grid-2-col">
				<div>
					<h2>our vision</h2>
					<p className="text">
						our goal to spread simple information in easy way and to expand the
						network around the world in different languages and styles.
					</p>
				</div>
				<img
					className="more-pic"
					src="./images/telescope.png"
					width={200}
					alt="vison rocket"></img>
			</div>
			<div className="grid-2-col">
				<img
					className="more-pic"
					src="./images/join-us.png"
					width={200}
					alt="vison rocket"></img>
				<div>
					<h2>join our community</h2>
					<p className="text">
						have an idea? React out! We are eager to talk about any potential
						business and licensing options. Get in touch with us to contribute
						to Snap of Quiz's continued success.
					</p>
				</div>
			</div>
		</section>
	);
}

export default More;
