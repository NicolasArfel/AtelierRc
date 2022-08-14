const nodemailer = require('nodemailer');

const contactController = {

    async mail(req, res) {
        try {
            const {
                from, subject, text, firstname, lastname,
            } = req.body;
            console.log({
                from, subject, text, firstname, lastname,
            });

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSMAIL,
                },
            });

            const templateMail = `
  <p>Bonjour Romain, </p>
  <p>Vous avez reçu un nouveau message de : <strong>${firstname} ${lastname} </strong></p>
  <p>Voici le contenu du message : </p>
  <p><strong>${text}</strong></p>
  <p>Si vous souhaitez lui répondre, voici son adresse mail :<strong> ${from}</strong>`;

            const mailOptions = {
                from: req.body.from,
                to: 'testatelierrc@gmail.com',
                subject: req.body.subject,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                text: req.body.text,
                html: templateMail,
            };

            await transporter.sendMail(mailOptions, (err, data) => {
                if (err) {
                    console.log('Error occurs');
                } else {
                    console.log('Email sent!');
                }
            });
        } catch (error) {
            console.trace(error);
        }
    },
};

module.exports = contactController;
