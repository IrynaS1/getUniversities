import getRequestValue from './modules/getRequestValue.js';

import getData from './modules/getData.js';

{
	const init = () => {
		const btn = document.querySelector('.request__button');

		btn.addEventListener('click', (e) => {
			e.preventDefault();

			const value = getRequestValue();

			getData(value);
		});

	};

	init();
}