const modal = () => {
	const closeButton = document.querySelector('.modal__close');
	const overlay = document.querySelector('.modal__overlay');
	const modal = document.querySelector('.modal');
	const showModal = document.querySelectorAll('.modal-show');
	const product = document.getElementById('formRequestPriceProduct');

	[closeButton, overlay].forEach(item => item.addEventListener('click', function (e) {
		if (e.target === closeButton || e.target === overlay) {
			modal.classList.remove('modal--show');
		}
	}));

	showModal.forEach(item => item.addEventListener('click', function () {
		console.log(item.dataset.product);
		product.value = item.dataset.product;
		modal.classList.add('modal--show');
	}));
};

export default modal;