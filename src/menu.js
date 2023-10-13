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
		const div = document.createElement('div');
		div.appendChild(document.createTextNode(appetizers_items[i]));
		appetizers.appendChild(div);
	}

	const main_courses = document.createElement('div');
	main_courses.id = 'main_courses';
	const main_courses_tittle = document.createElement('div');
	main_courses_tittle.id = 'main_courses_tittle';
	main_courses_tittle.textContent = 'Main Courses';
	main_courses.appendChild(main_courses_tittle);

	let main_courses_items = ["1 - Gravlax Salmon with Mustard and Dill Sauce - $32.50", "2 - Venison Meatballs with Celery Root Puree - $28.90", "3 - Wild Mushroom Risotto - $26.00"];
	
	for (let i = 0; i < main_courses_items.length; i++) {
		const div = document.createElement('div');
		div.appendChild(document.createTextNode(main_courses_items[i]));
		main_courses.appendChild(div);
	}
	
	const meat_dishes = document.createElement('div');
	meat_dishes.id = 'meat_dishes';
	const meat_dishes_tittle = document.createElement('div');
	meat_dishes_tittle.id = 'meat_dishes_tittle';
	meat_dishes_tittle.textContent = 'Meat Dishes';
	meat_dishes.appendChild(meat_dishes_tittle);

	let meat_dishes_items = ["1 - Lamb Chops with Currant Sauce - $35.50", "2 - Roast Duck with Lingonberry Sauce - $38.20", "3 - Elk Steak with Rösti Potatoes - $40.00"];
	
	for (let i = 0; i < meat_dishes_items.length; i++) {
		const div = document.createElement('div');
		div.appendChild(document.createTextNode(meat_dishes_items[i]));
		meat_dishes.appendChild(div);
	}
	
	const veg_options = document.createElement('div');
	veg_options.id = 'veg_options';
	const veg_options_tittle = document.createElement('div');
	veg_options_tittle.id = 'veg_options_tittle';
	veg_options_tittle.textContent = 'Vegetarian and Vegan Options';
	veg_options.appendChild(veg_options_tittle);

	let veg_options_items = ["1 - Chickpea Patties with Vegan Yogurt Sauce - $24.90", "2 - Carrot and Pumpkin Tart - $22.00", "3 - Zucchini Spaghetti with Spinach Pesto - $20.50"];

	for (let i = 0; i < veg_options_items.length; i++) {
		const div = document.createElement('div');
		div.appendChild(document.createTextNode(veg_options_items[i]));
		veg_options.appendChild(div);
	}
	
	const desserts= document.createElement('div');
	desserts.id = 'desserts';
	const desserts_tittle = document.createElement('div');
	desserts_tittle.id = 'desserts_tittle';
	desserts_tittle.textContent = 'Desserts';
	desserts.appendChild(desserts_tittle);

	let desserts_items = ["1 - Apple Pie with Vanilla Cream - $12.50", "2 - Dark Chocolate Mousse with Red Berries - $14.00", "3 - Cardamom Ice Cream with Rhubarb Compote - $10.80"];

	for (let i = 0; i < desserts_items.length; i++) {
		const div = document.createElement('div');
		div.appendChild(document.createTextNode(desserts_items[i]));
		desserts.appendChild(div);
	}
	
	menu.appendChild(appetizers);
	menu.appendChild(main_courses);
	menu.appendChild(meat_dishes);
	menu.appendChild(veg_options);
	menu.appendChild(desserts);
	content.appendChild(menu);
}

export { menu };
