function navbar() {
	const content = document.getElementById('content');

	const navbar      = document.createElement('div');
	const home_btn    = document.createElement('div');
	const menu_btn    = document.createElement('div');
	const contact_btn = document.createElement('div');

	home_btn.textContent    = 'Home';
	menu_btn.textContent    = 'Menu';
	contact_btn.textContent = 'Contact';

	navbar.id = 'navbar';
	navbar.appendChild(home_btn);
	navbar.appendChild(menu_btn);
	navbar.appendChild(contact_btn);

	content.appendChild(navbar);

	home_btn.addEventListener('click', () => {
		const home    =    document.getElementById('home');
		const menu    =    document.getElementById('menu');
		const contact = document.getElementById('contact');
		
		home.style.display    = 'block';
		menu.style.display    = 'none';
		contact.style.display = 'none';
	});
	
	menu_btn.addEventListener('click', () => {
		const home    =    document.getElementById('home');
		const menu    =    document.getElementById('menu');
		const contact = document.getElementById('contact');
		
		home.style.display    = 'none';
		menu.style.display    = 'block';
		contact.style.display = 'none';
	});
	
	contact_btn.addEventListener('click', () => {
		const home    =    document.getElementById('home');
		const menu    =    document.getElementById('menu');
		const contact = document.getElementById('contact');
		
		home.style.display    = 'none';
		menu.style.display    = 'none';
		contact.style.display = 'block';
	});
}

export { navbar };
