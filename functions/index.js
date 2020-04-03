const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

const mailTransport = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: '465',
  auth: {
    user: 'apikey',
    pass: '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',
  },
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  const mailOptions = {
    from: `david.hutto@portfolio.com`,
    to: `davidsnextemail@gmail.com`
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