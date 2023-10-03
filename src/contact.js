function contact() {
	const content = document.getElementById('content');
	const contact = document.createElement('div');

	contact.id = 'contact';
	contact.textContent = 'Contact Page';
	contact.style.display = 'none';
	content.appendChild(contact);
}

export { contact };
