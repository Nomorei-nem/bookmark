'use strict';

const hamburgerBtn = document.querySelector('.hamburger');
const logo = document.querySelector('.logo');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerBtn.addEventListener('click', () => {
	hamburgerBtn.classList.toggle('open');
	mobileMenu.classList.toggle('hidden');

	logo.classList.toggle('fill-white');
});

// Features Sections: Tabs

const tabs = Array.from(document.getElementsByClassName('tab'));
const features = Array.from(document.getElementsByClassName('feature'));

tabs.forEach((el) => {
	const tabNumber = `tab-${tabs.indexOf(el) + 1}`;
	const currentTab = document.querySelector(`.${tabNumber}`);
	const featureNumber = `feature-${tabs.indexOf(el) + 1}`;
	const currentFeature = document.querySelector(`.${featureNumber}`);

	currentTab.addEventListener('click', () => {
		tabs.forEach((el) => {
			el.classList.remove('active-tab');
		});

		features.forEach((el) => {
			el.classList.remove('hidden');

			if (el !== currentFeature) {
				el.classList.add('hidden');
			}
		});

		currentTab.classList.add('active-tab');
	});
});
