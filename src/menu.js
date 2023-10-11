function menu() {
	const content = document.getElementById('content');
	const menu    =      document.createElement('div');

	menu.id = 'menu';
	menu.style.display = 'none';
	
	const menu_title = document.createElement('div');
	menu_title.id = 'menu_tittle';
	menu_title.textContent = 'Menu';
	menu.appendChild(menu_title);

	const appetizers = document.createElement('div');
	appetizers.id = 'appetizers';
	const appetizers_tittle = document.createElement('div');
	appetizers_tittle.id = 'appetizers_tittle';
	appetizers_tittle.textContent = 'Appetizers';
	appetizers.appendChild(appetizers_tittle);
	
	let appetizers_items = ["1 - Smoked Salmon Soup - $18.50", "2 - Pickled Herring with New Potatoes - $15.80", "3 - Beet and Apple Salad - $14.90"];
	
	for (let i = 0; i < appetizers_items.length; i++) {
		const li = document.createElement('div');
		li.appendChild(document.createTextNode(appetizers_items[i]));
		appetizers.appendChild(li);
	}
	menu.appendChild(appetizers);
	content.appendChild(menu);
}

export { menu };
