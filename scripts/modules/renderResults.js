import getData from './getData.js';

const renderResults = (data) => {
	console.log('data in render', typeof data);
	const block = document.querySelector('.results');

	const title = document.createElement('h3');
	title.classList.add('results__title');
	title.textContent = 'Results';

	block.prepend(title);

	if (data.length === 0) {
		const p = document.createElement('p');
		p.classList.add('results__bad-request');
		p.textContent = 'Not found. Please, confirm your entries';

		block.append(p);
	} else {
		data.forEach(element => {
			const a = document.createElement('a');
			a.setAttribute('href', `${element.web_pages[0]}`);
			a.setAttribute('target', '_blanc');

			const p = document.createElement('p');
			p.classList.add('results__item');
			p.textContent = `${element.name}`;

			const blockResultsItems = document.querySelector('.results__items');

			a.appendChild(p);
			blockResultsItems.prepend(a);
		});
	}
};

export default renderResults;