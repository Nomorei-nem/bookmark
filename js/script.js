'use strict';

const hamburgerBtn = document.querySelector('.hamburger');
const logo = document.querySelector('.logo');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerBtn.addEventListener('click', () => {
	hamburgerBtn.classList.toggle('open');
	mobileMenu.classList.toggle('hidden');

	logo.classList.toggle('fill-white');
});
