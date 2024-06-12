const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get('/api/feedback', (req, res) => {
	res.json({ meassage: 'Hello World!' });
	// try {
	// 	const { name, email, message } = req.body;

	// 	const mailTransport = nodemailer.createTransport({
	// 		host: "smtp.timeweb.ru",
	// 		port: 465,
	// 		secure: true,
	// 		auth: {
	// 			user: "",
	// 			pass: "Z\$?\8,aptF,)d"
	// 		}
	// 	});

	// 	res.json({ meassage: 'Hello World!' });
	// } catch (e) {
	// 	return res.status(500).send({
	// 		status: 500,
	// 		message: "Ошибка при отправки письма"
	// 	});
	// }
});

const start = async = () => {
	try {
		app.listen(PORT, () => console.log(`Server start ${PORT} port`));
	} catch (e) {
		console.log(e)
	}
};

start();