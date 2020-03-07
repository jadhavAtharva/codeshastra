const send = require('gmail-send')({
    user: 'atharva9912345@gmail.com',
    pass: 'wildandfree',
    to: 'atharva9912345@gmail.com',
    subject: 'Test mail',
    text: 'Gmail-Send example',
}, (error, result, callback) => {
    if(error) {
        console.log(error)
    }

    console.log(result)
})

