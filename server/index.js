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

		console.log("TEST", email)

		let transporter = nodemailer.createTransport({
			host: 'smtp.timeweb.ru',
			port: 465,
			secure: true,
			auth: {
				user: "info@tekway-msk.ru",
				pass: "Z\\$?\\8,aptF,)d"
			},
			debug: true
		});

		const info = await transporter.sendMail({
			from: "info@tekway-msk.ru",
			to: "info@tekway-msk.ru",
			subject: "Форма обратной связи с tekway-msk.ru",
			text: "Hello world",
			html: `
				<div><b>Имя: </b>${name}</div>
				<div><b>Email: </b>${email}</div>
				<div><b>Сообщение: </b>${message}</div>
			`,
		});

		console.log("Message sent: %s", info.messageId);

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

app.post('/api/request-price', async (req, res) => {
	try {
		const { name, phone, email, message, product } = req.body;

		console.log("TEST", phone)

		let transporter = nodemailer.createTransport({
			host: 'smtp.timeweb.ru',
			port: 465,
			secure: true,
			auth: {
				user: "info@tekway-msk.ru",
				pass: "Z\\$?\\8,aptF,)d"
			},
			debug: true
		});

		const info = await transporter.sendMail({
			from: "info@tekway-msk.ru",
			to: "info@tekway-msk.ru",
			subject: "Запрос цены с tekway-msk.ru",
			text: "Hello world",
			html: `
				<div><b>Товар: </b>${product}</div>
				<div><b>Имя: </b>${name}</div>
				<div><b>Телефон: </b>${phone}</div>
				<div><b>Email: </b>${email}</div>
				<div><b>Сообщение: </b>${message}</div>
			`,
		});

		console.log("Message sent: %s", info.messageId);

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

app.get('/api/test', (req, res) => {
	res.json({
		status: 200,
		message: "OK!"
	});
});

const start = async = () => {
	try {
		app.listen(PORT, () => console.log(`Server start ${PORT} port`));
	} catch (e) {
		console.log(e)
	}
};

start();