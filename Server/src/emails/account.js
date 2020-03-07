const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail({
        to: email,
        from: 'atharva9912345@gmail.com',
        subject: 'Thanks for joining in.',
        text: `Welcome to the app, ${name}. Let me know how you get along with app.`
    })
}

module.exports = {
    sendWelcomeEmail
}


const sendCancelationEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'atharva9912345@gmail.com',
        subject: 'Sorry to see you go.',
        text: `Goodbye, ${name}. Hope to see you again.`
    })
}


// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey('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');
// const msg = {
//   to: 'atharva9912345@gmail.com',
//   from: 'devilsdream311@gmail.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);






// const nodemailer = require('nodemailer')

// async function main() {
//     let testAccount = await nodemailer.createTestAccount()

//     let transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false,
//         auth: {
//             user: testAccount.user,
//             pass: testAccount.pass
//         }
//     });

//     let info = await transporter.sendMail({
//         from: '"HI this is Atharva <atharva9912345@gmail.com>',
//         to: "atharva9912345@gmail.com",
//         subject: "Hello ",
//         text: "Hello world?",
//         html: "<b>Hello World</b>"
//     });

//     console.log("Message sent: %s", info.messageId);
// }
// main().catch(console.error);