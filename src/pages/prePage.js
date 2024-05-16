function PrePage({ dispatch, handleBtn, setCategoryId }) {
	return (
		<div>
			<div className="quiz-page-container">
				<img
					className="quiz-page-img"
					src="./images/let's-search.png"
					alt="let's search"></img>
				<h2>Choose Category</h2>
				<form
					className="form grid-4-col "
					onChange={(e) => setCategoryId(e.target.value)}>
					<input
						type="radio"
						id="lang-1"
						name="lang"
						value={9}
						className="radio"></input>
					<label className="label label-1 flex-col" htmlFor="lang-1">
						<span>
							<img
								src="./images/general-info.png"
								alt="pic"
								className="category-icon"></img>
						</span>
						General Knowledge
					</label>
					<input
						type="radio"
						id="lang-2"
						name="lang"
						value={21}
						className="radio"></input>
					<label className="label label-2 flex-col" htmlFor="lang-2">
						<span>
							<img
								src="./images/sports.png"
								alt="pic"
								className="category-icon"></img>
						</span>
						Sports
					</label>
					<input
						type="radio"
						id="lang-3"
						name="lang"
						value={28}
						className="radio"></input>
					<label className="label label-3 flex-col" htmlFor="lang-3">
						<span>
							<img
								src="./images/v.png"
								alt="pic"
								className="category-icon"></img>
						</span>
						Vehicles
					</label>
					<input
						type="radio"
						id="lang-4"
						name="lang"
						value={27}
						className="radio"></input>
					<label className="label label-4 flex-col" htmlFor="lang-4">
						<span>
							<img
								src="./images/animals.png"
								alt="pic"
								className="category-icon"></img>
						</span>
						Animals
					</label>
					<input
						type="radio"
						id="lang-5"
						name="lang"
						value={25}
						className="radio"></input>
					<label className="label label-5 flex-col" htmlFor="lang-5">
						<span>
							<img
								src="./images/art.png"
								alt="pic"
								className="category-icon"></img>
						</span>
						Art
					</label>
					<input
						type="radio"
						id="lang-6"
						name="lang"
						value={23}
						className="radio"></input>
					<label className="label label-6 flex-col" htmlFor="lang-6">
						<span>
							<img
								src="./images/history.png"
								alt="pic"
								className="category-icon"></img>
						</span>
						History
					</label>
				</form>

				<button
					className="quiz-page-btn"
					onClick={() => {
						dispatch({ type: 'dataFetching' });
						handleBtn();
					}}>
					Start
				</button>
				<p className="text">You have 15 seconds to take you move</p>
			</div>
		</div>
	);
}

export default PrePage;
