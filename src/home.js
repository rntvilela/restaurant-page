function home() {
	const content = document.getElementById('content');
	const home = document.createElement('div');

	home.id = 'home';
	home.textContent = 'Home Page';
	content.appendChild(home);
}

export { home };
