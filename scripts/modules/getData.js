import renderResults from './renderResults.js';

const getData = async (query) => {
	const url = 'http://universities.hipolabs.com/search?country=' + query;

	const promise = await fetch(url);

	const data = await promise.json();
	console.log('data', data);
	renderResults(data);
};

export default getData;