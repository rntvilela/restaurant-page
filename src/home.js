function home() {
	const content = document.getElementById('content');
	const head = document.createElement('div');

	head.textContent = 'Nordic Cousine';
	content.appendChild(head);
}

export { home };
