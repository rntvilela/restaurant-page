function menu() {
	const content = document.getElementById('content');
	const menu    =      document.createElement('div');

	menu.id = 'menu';
	menu.textContent = 'Menu Page';
	menu.style.display = 'none';
	content.appendChild(menu);
}

export { menu };
