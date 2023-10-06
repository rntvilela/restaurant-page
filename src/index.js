import './css/styles.css';

import { navbar } from './navbar.js'
import { home } from './home.js'
import { menu } from './menu.js'
import { contact } from './contact.js'

document.addEventListener('DOMContentLoaded', () => {
	navbar();
	home();
	menu();
	contact();
});
