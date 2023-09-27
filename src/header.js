function header() {
	const content = document.getElementById('content');
	const header = document.createElement('header');
	const h = document.createElement('h1');

	h.textContent = 'Nordic Cousine';

	header.appendChild(h);
	
	content.appendChild(header);
}

export { header }; 
