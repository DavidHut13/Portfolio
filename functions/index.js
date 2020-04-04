const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

const mailTransport = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: '465',
  auth: {
    user: 'apikey',
    pass: process.env.VUE_APP_sendGrid_Key,
  },
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  const mailOptions = {
    from: `david.hutto@portfolio.com`,
    to: `dhutto_11@live.com`
  };

  // in case you get CORS errors you need these 2 lines of code


  cors(req, res, () => {
    mailOptions.subject = 'Portfolio Message';
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Credentials', 'true');
    mailOptions.html =   `
    <p>Email: ${req.body.email}</p>
    <p>Name: ${req.body.name}</p>
    <p>Message: ${req.body.message}</p>
    `;
  
      return mailTransport.sendMail(mailOptions)
        .then(() => {
        return res.status(200).json({success: true})
      })
        .catch((e) => {
          return res.status(400).json({err: e});
        })
  });
});