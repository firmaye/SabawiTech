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
    if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
  });
};

// send email
const EmailSender = ({ email,name,subject,message }) => {
  const options = {
    from: `Pro-Talent 🛍️ <abualemayehu16@gmail.com>`,
    to: "fekedealemayehu4@gmail.com",
    subject: 'Issue From Prolent Platform',
    html: `
        <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
        <div style="max-width: 700px; background-color: white; margin: 0 auto">
          <div style="width: 100%; background-color: #00efbc; padding: 20px 0">
          <a href="${process.env.CLIENT_URL}" ><img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Page_issue_icon_-_medium.svg/1024px-Page_issue_icon_-_medium.svg.png"
              style="width: 100%; height: 70px; object-fit: contain"
            /></a> 
          
          </div>
          <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
            <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
              Credential Informations
            </p>
            <div style="font-size: .8rem; margin: 0 30px">
              <p>FullName: <b>${name}</b></p>
              <p>Email: <b>${email}</b></p>
              <p>Subject: <b>${subject}</b></p>
              <p>Message: <b>${message}</b></p>
            </div>
			<p>Pro-Talent- A place where you find Internship</p>
          </div>
        </div>
      </div>
        `,
  };

  const sent=Email(options)
  return sent
};
module.exports= EmailSender