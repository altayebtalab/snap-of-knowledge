import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleBar = () => {
		setIsOpen(!isOpen);
	};
	const aboutRef = useRef();
	const learnRef = useRef();
	const moreRef = useRef();

	return (
		<header>
			<nav>
				<ul className="nav flex justify-between">
					<li>
						<Link to="/">
							<img
								className="header-logo"
								src="./images/snap-of-knowledge.png"
								alt="logo"></img>
						</Link>
					</li>
					<button className="button-navbar" onClick={toggleBar}>
						{isOpen ? (
							<svg
								viewBox="-0.5 0 25 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M3 21.32L21 3.32001"
									stroke="#19323c"
									strokeWidth="1.2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M3 3.32001L21 21.32"
									stroke="#19323c"
									strokeWidth="1.2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="mobile-icon"
								viewBox="0 0 512 512">
								<path
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeMiterlimit="10"
									strokeWidth="32"
									d="M80 160h352M80 256h352M80 352h352"
								/>
							</svg>
						)}
					</button>
					<li className={`menu-list-${isOpen ? 'isOpen' : ''}`}>
						<ul className="flex">
							<li
								ref={aboutRef}
								onClick={
									isOpen
										? toggleBar
										: () => {
												aboutRef.current.scrollIntoView();
										  }
								}>
								<a href="#about" className="nav-link">
									about
								</a>
							</li>
							<li
								ref={learnRef}
								onClick={
									isOpen
										? toggleBar
										: () => {
												learnRef.current.scrollIntoView();
										  }
								}
								className="flex">
								<a href="#learn" className="nav-link">
									learn
								</a>
							</li>
							<li
								ref={moreRef}
								onClick={
									isOpen
										? toggleBar
										: () => {
												moreRef.current.scrollIntoView();
										  }
								}
								className="flex">
								<a href="#more" className="nav-link">
									more
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
