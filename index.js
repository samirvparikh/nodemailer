var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'samirvparikh@gmail.com',
    pass: 'xddrgmvsipbksopa' //need to app password [Sign in with App Passwords]
  }
});

var mailOptions = {
  from: 'samirvparikh@gmail.com',
  to: 'samir.dentaweb@gmail.com',
  subject: 'Email From Node.js',
  text: 'Hi, This is test email from nodejs application'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});