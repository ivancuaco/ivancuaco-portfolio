const { Router } = require('express')
const EmailsRouter = Router()
const fs = require('fs')
const path = require('path')
const nodeMailer = require('nodemailer')

const googleTransporter = nodeMailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'ivancuaco.dev@gmail.com',
    pass: 'hzhuqukrpftbfjnm'
  }
})


EmailsRouter.get('/', (req, res) => {
  const emailTemplatePath = path.join(__dirname, '../templates/emails/contact.html')

  fs.readFile(emailTemplatePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading email template:', err)
      return res.status(500).json({ error: 'Internal Server Error' })
    }

    const emailContent = data.replace('{{fullname}}', 'Jhovan Cuaco')

    sendMail(
      'ivancuaco.devmode@gmail.com',
      'ivancuaco.dev@gmail.com',
      'Ivan Cuaco Portfolio',
      emailContent
    )

    res.send(emailContent)
  })
})

EmailsRouter.post('/contact', (req, res) => {
  const emailTemplatePath = path.join(__dirname, '../templates/emails/contact.html')

  fs.readFile(emailTemplatePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading email template:', err)
      return res.status(500).json({ error: 'Internal Server Error' })
    }

    const emailContent = data.replace('{{fullname}}', req.body.fullname)

    const mailSent = sendMail(
      req.body.email,
      'ivancuaco.dev@gmail.com',
      'Ivan Cuaco Portfolio',
      emailContent
    )

    if (mailSent)
      res.json({ message: 'sent' })
    else
      res.status(400).json({ message: 'not send' })
  })
})




async function sendMail(from, to, subject, message, html = true) {

  let emailConfig = {
    from,
    to,
    subject
  }

  if (html)
    emailConfig.html = message
  else
    emailConfig.text = message

  try {
    await googleTransporter.sendMail(emailConfig)
    return true
  } catch (error) {
    return false
  }

}

module.exports = EmailsRouter

