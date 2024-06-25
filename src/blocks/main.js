// import viewingImage from './scroll-to-section';
import tabs from './tabs/tabs';
import card from './card/card';
import contactForm from './section-contact-form/contact-form';
import modal from './modal/modal';
import formRequestPrice from "./form-request-price/form-request-price";

window.addEventListener('DOMContentLoaded', () => {
	// scrollToSection();
	tabs();
	card();
	contactForm();
	modal();
	formRequestPrice();
});
