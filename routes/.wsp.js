// const express = require('express')
// const router = express.Router()

// const { Client, LocalAuth } = require('whatsapp-web.js');


// const client = new Client({
//     puppeteer: {
//         headless: true,
//         args: ['--no-sandbox']
//     },
//     authStrategy: new LocalAuth({
//         clientId: 'xanel',
//         dataPath: './wsp-session'
//     }),

// });

// client.on('qr', (qr) => {
//     console.log('QR RECEIVED', qr);
// });

// client.on('ready', () => {
//     console.log('Cliente de WhatsApp listo');
// });





// client.initialize()




// router.get('/wsp', async (req, res) => {
//     const number = "+56930978304";

//     // Your message.
//     const text = "Hey john";

//     // Getting chatId from the number.
//     // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
//     //  const chatId = number.substring(1) + "@c.us"
//     const country = 56
//     const chatId = country + '930978304' + "@c.us"

//     await client.sendMessage(chatId, text)
//     res.json({ message: 'WSP OK' })
// })


// router.post('/wsp/send', async (req, res) => {
//     const { number, text } = req.body
//     const country = 56
//     const chatId = country + number + "@c.us"
//     await client.sendMessage(chatId, text)
//     res.json({ message: 'WSP OK' })
// })


// module.exports = router