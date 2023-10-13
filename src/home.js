function home() {
	const content = document.getElementById('content');
	const home = document.createElement('div');

	home.id = 'home';

	const home_tittle = document.createElement('div');
	home_tittle.id = 'home_tittle';
	home_tittle.textContent = 'Welcome to Nordic Cuisine';

	const home_text = document.createElement('div');
	home_text.id = 'home_text';

	const discover = document.createElement('div');
	discover.textContent = "Discover the magic of Nordic Cuisine, where Nordic tradition meets culinary innovation. Our chefs, passionate about authenticity, transform fresh ingredients into gastronomic masterpieces. In a welcoming atmosphere, we celebrate sustainability and offer personalized options for every taste.";

	const when = document.createElement('div');
	when.textContent = "When you visit Nordic Cuisine, you'll immerse yourself in a unique experience, where each dish is a journey of authentic Nordic flavors. Book now and let us guide you through a culinary experience that transcends the ordinary, in the heart of the North.";

	home_text.appendChild(discover);
	home_text.appendChild(when);

	const home_hours = document.createElement('div');
	home_hours.id = 'home_hours';
	
	const sunday = document.createElement('div');
	sunday.textContent = 'Sunday: 8am - 8pm';
	home_hours.appendChild(sunday);
	
	const monday = document.createElement('div');
	monday.textContent = 'Monday: 6am - 6pm';
	home_hours.appendChild(monday);
	
	const tuesday = document.createElement('div');
	tuesday.textContent = 'Tuesday: 6am - 6pm';
	home_hours.appendChild(tuesday);
	
	const wednesday = document.createElement('div');
	wednesday.textContent = 'Wednesday: 6am - 6pm';
	home_hours.appendChild(wednesday);
	
	const thursday = document.createElement('div');
	thursday.textContent = 'Thursday: 6am - 10pm';
	home_hours.appendChild(thursday);
	
	const friday = document.createElement('div');
	friday.textContent = 'Friday: 6am - 10pm';
	home_hours.appendChild(friday);
	
	const saturday = document.createElement('div');
	sunday.textContent = 'Saturday: 8am - 10pm';
	home_hours.appendChild(saturday);

	const home_location = document.createElement('div');
	home_location.id = 'home_location';
	home_location.textContent = '298, R. Ragnar Lothbrok, Campinas, São Paulo'

	home.appendChild(home_tittle);
	home.appendChild(home_text);
	home.appendChild(home_hours);
	home.appendChild(home_location);
	content.appendChild(home);
}

export { home };
