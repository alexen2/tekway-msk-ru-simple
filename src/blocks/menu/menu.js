const menu = () => {
	const menu = document.querySelector('.menu');

	delegate(menu, 'a', 'click', function (e) {
		e.preventDefault();

		const target = document.querySelector(this.hash);
		const top = target.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
		console.log(target.getBoundingClientRect())

		window.scrollTo({
			top,
			behavior: "smooth"
		});
	});
};

export default menu;

function delegate(container, selector, currentEvent, handler) {
	container.addEventListener(currentEvent, function (e) {
		const element = e.target.closest(selector);

		if (element && container.contains(element)) {
			handler.call(element, e);
		}
	});
}