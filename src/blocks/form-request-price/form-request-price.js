const formRequestPrice = () => {
	const formContact = document.getElementById('formRequestPrice');
	const phone = document.getElementById('formRequestPricePhone');

	formContact.addEventListener('submit', function (event) {
		let isNoError = true;

		event.preventDefault();

		if (!phone.value) {
			isNoError = false;
			console.log("No phone!")
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
					formContact.innerHTML = "<h2 style='text-align: center;'>Произошла ошибка. Сообщение не отправленно! Обновите страницу.</h2>";

					throw new Error(`HTTP error! status: ${response.status}`);
				}

				// formContact.innerHTML = "<h2 style='text-align: center;'>Спасибо, сообщение отправлено!</h2>";
				formContact.reset();
				return response.json();
			})
			.catch(error => {
				console.log(error);
			});
	}
};

export default formRequestPrice;