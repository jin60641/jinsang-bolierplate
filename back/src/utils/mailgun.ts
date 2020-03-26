import Mailgun from 'mailgun-js';

interface Mail {
  to: string;
  subject: string;
  html: string;
}

const {
  DOMAIN, MAILGUN_API_KEY,
} = process.env;

const mailgun = Mailgun({
  apiKey: MAILGUN_API_KEY!, domain: DOMAIN!,
});

const sendMail = (data: Mail) => new Promise((resolve) => {
  mailgun.messages().send({
    ...data,
    from: 'Flow Waterjet <info@waterjetcenter.com>',
  }, (err, body) => {
    if (err || !body) {
      resolve(null);
    }
    resolve(body);
  });
});

export default sendMail;
