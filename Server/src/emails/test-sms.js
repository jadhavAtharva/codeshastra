//OunGsl3rigVmp73dLYek9VFjhhp7yXV2TpxvLHqC

const sendSmsVerification = (name, phone_no, rand_no) => {
const accountSid = 'AC43865c74296f27439803f86a653f7c5d'
const authToken = 'e9321e60da47e7ba68fec8c0e49e4d26'

const phone = "+91".concat(phone_no)

const client = require('twilio')(accountSid, authToken)
    client.messages
.create({
    body: `Hello ${name}, welcome to the Farmers app and Your username and password are: Username: ${phone_no} and Password: ${rand_no} `,
    from: '+12563914861',
    to: phone
}).then(message => console.log(message.sid));

}

module.exports = {
    sendSmsVerification
}
