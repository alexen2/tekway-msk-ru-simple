const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.post('/api/feedback', async (req, res) => {
	try {
		const { name, email, message } = req.body;

		let transporter = nodemailer.createTransport({
			sendmail: true,
			newline: 'unix',
			path: '/usr/sbin/sendmail'
		});

		transporter.sendMail({
			from: 'info@tekway-msk.ru',
			to: 'info@tekway-msk.ru',
			subject: 'Message',
			text: 'I hope this message gets delivered!'
		}, (err, info) => {
			console.log(info.envelope);
			console.log(info.messageId);
		});



		// const mailTransport = nodemailer.createTransport({
		// 	host: 'smtp.timeweb.ru',
		// 	port: 465,
		// 	secure: true,
		// 	auth: {
		// 		user: "info@tekway-msk.ru",
		// 		pass: "Z\$?\8,aptF,)d"
		// 	}
		// });

		// const mailBody = `
		// 	<div><b>Имя: </b> ${name}</div>
		// 	<div><b>Email: </b> ${email}</div>
		// 	<div><b>Сообщение: </b> ${message}</div>
		// `;

		// const mailOptions = {
		// 	from: "info@tekway-msk.ru",
		// 	to: "info@tekway-msk.ru",
		// 	subject: "Форма обратной связи с tekway-msk.ru:",
		// 	text: 'mailBody'
		// };

		// mailTransport.verify(function (error, success) {
		// 	if (error) {
		// 		console.log("Server error!", error);
		// 	} else {
		// 		console.log("Server is ready to take our messages", success);
		// 	}
		// });


		// await mailTransport.sendMail(mailOptions, (error, info) => {
		// 	if (error) {
		// 		return console.log(error, "test");
		// 	}
		// 	console.log('Message sent: %s', info.messageId);
		// });

		res.status(200).send({
			status: 200
		});
	} catch (e) {
		return res.status(500).send({
			status: 500,
			message: "Ошибка при отправки письма"
		});
	}
});

const start = async = () => {
	try {
		app.listen(PORT, () => console.log(`Server start ${PORT} port`));
	} catch (e) {
		console.log(e)
	}
};

start();