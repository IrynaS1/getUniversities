//import getData from './getData.js';

const getRequestValue = () => {
	const input = document.querySelector('.request__input');

	const inputValue = input.value;

	if (inputValue !== '') {
		return inputValue;
	} else {
		console.log('inputValue is empty');
	}
};

export default getRequestValue;