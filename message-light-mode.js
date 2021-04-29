function messageLightMode (enable) {
	const btnLight = document.querySelector('.message-toggle-light');
	const btnDark = document.querySelector('.message-toggle-dark');
	const stylesheet = document.querySelector('#stylesheet-dark');

	btnLight.classList.toggle('hidden', enable);
	btnDark.classList.toggle('hidden', !enable);

	if (enable) stylesheet.setAttribute('disabled', 'true');
	else stylesheet.removeAttribute('disabled');
}
