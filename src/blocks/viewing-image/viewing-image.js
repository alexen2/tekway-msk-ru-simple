const viewingImage = () => {
	const images = document.querySelectorAll('[data-img]');
	const modal = document.querySelector('.viewing-image');
	const modalCloseButton = document.querySelector('.viewing-image__close');
	const imgContainer = document.querySelector('.viewing-image__img-container');

	if(images.length > 0) {
		images.forEach(img => {
			img.addEventListener('click', (e) => {
				const currentImage = e.target.getAttribute('data-img');
				modal.classList.add('viewing-image--open');
				imgContainer.setAttribute('src', currentImage);
			});
		});

		modalCloseButton.addEventListener('click', modalClose);
	}	
	
	window.addEventListener('keydown', () => {
		if(modal.classList.contains('viewing-image--open')) {
			modalClose();
		}
	});

	document.addEventListener('click', (e) => {
		if(e.target == modal) {
			modalClose();
		}
	});

	function modalClose() {
		modal.classList.remove('viewing-image--open');
	}
};

export default viewingImage;