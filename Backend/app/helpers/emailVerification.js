const nodemailer= require('nodemailer')
const Email = (options) => {
  let transpoter = nodemailer.createTransport({
    service:process.env.SERVICE,
    auth: {
      user:process.env.USER, 
      pass: process.env.PASS, 
    },
	tls: {
          rejectUnauthorized: false
      }
  });
  transpoter.sendMail(options, (err, info) => {
    if (err) {
    console.log(err);
  } else {
    console.log('Email sent: ' + info.response);
  }
  });
};

// send email
const EmailSender = ({ email, subject, message }) => {
	console.log(message)
  const options = {
    from: process.env.USER,
    to: email,
    subject: subject,
    html:`<strong>verify your email by clicking this link:</strong <hr>  <b>${message}</b>`
	 };

  const sent=Email(options)
  return sent
};
module.exports= EmailSender