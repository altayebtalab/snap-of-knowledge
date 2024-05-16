const nav = document.querySelector('.nav');
const mobileBtn = document.querySelector('.btn-mobile-nav');

const navFun = function () {
	mobileBtn.addEventListener('click', function () {
		// it'll toggle the hidden class into nav element
		nav.classList.toggle('mobile-nav');
		// it'll toggle the hidden nav-logo-open into mobile button element
		mobileBtn.classList.toggle('nav-logo-open');
	});
};
// navFun();
