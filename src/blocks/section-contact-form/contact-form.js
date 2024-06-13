const contactForm = () => {
	const formContact = document.getElementById('formContact');
	const email = document.getElementById('formContactEmail');

	formContact.addEventListener('submit', function (event) {
		let isNoError = true;

		event.preventDefault();

		if (!email.value) {
			isNoError = false;
			console.log("No email!")
		}

		if (isNoError) {
			const feedbackFormData = new FormData(event.target);
			// console.log(feedbackFormData);
			const feedback = Object.fromEntries(feedbackFormData);
			// console.log(feedback)
			sendFeedback(feedback);
		}
	});

	function sendFeedback(feedback) {
		fetch("/api/feedback", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(feedback),
		})
			.then(response => {
				if (!response.ok) {
					formContact.innerHTML = "<h2 style='text-align: center;'>Произошла ошибка. Сообщение не отправленно!</h2>";

					throw new Error(`HTTP error! status: ${response.status}`);
				}

				formContact.innerHTML = "<h2 style='text-align: center;'>Спасибо, сообщение отправлено!</h2>";

				return response.json();
			})
			.catch(error => {
				console.log(error);
			});
	}
}

export default contactForm;