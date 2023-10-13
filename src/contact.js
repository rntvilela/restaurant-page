import imageUrl from './img/cookniche.jpg';

function contact() {
	const content = document.getElementById('content');
	const contact = document.createElement('div');

	contact.id = 'contact';
	contact.style.display = 'none';
	
	const contact_tittle = document.createElement('div');
	contact_tittle.id = 'contact_tittle';
	contact_tittle.textContent = 'Contact Us';
	contact.appendChild(contact_tittle);
	
	const contact_text = document.createElement('div');
	contact_text.id = 'contact_text';

	let contact_info = ["Nordic Cousine", "555-555-5554", "nordic_cousine@ragnar.lothbrok"];

	for (let i = 0; i < contact_info.length; i++) {
		const div = document.createElement('div');
		div.appendChild(document.createTextNode(contact_info[i]));
		contact_text.appendChild(div);
	}
	
	const img_div = document.createElement('div');
	img_div.id = 'img_div';

	const img = document.createElement('img');
	img.src = imageUrl;
	img.alt = 'Nordic Cousine';
	img.width = 600;
	img_div.appendChild(img);
	contact_text.appendChild(img_div);

	contact.appendChild(contact_text);
	content.appendChild(contact);
}

export { contact };
