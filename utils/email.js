const nodemailer = require('nodemailer')
const pug = require('pug')
const htmlToText = require('html-to-text')


module.exports = class Email {
    constructor(user,url) {
        this.to=user.email;
        this.firstName=user.name.split(' ')[0];
        this.url=url;
        this.from =`Sourav Prasad Sah <${process.env.EMAIL_FROM}>`;
    }
    newTransport() {
    return nodemailer.createTransport({
        service:'Sendinblue',
        auth : {
            user:process.env.SENDINBLUE_USERNAME,
            pass:process.env.SENDINBLUE_PASSWORD
        }
    });
    }
    async send(template,subject) {
        const html =pug.renderFile(`${__dirname}/../views/email/${template}.pug`,{
            firstName:this.firstName,
            url:this.url,
            subject
        });

        const mailOptions = {
            from:this.from,
            to:this.to,
            subject,
            html,
            text:htmlToText.fromString(html)
        }
        await this.newTransport().sendMail(mailOptions)
    }
    async sendWelcome() {
        await this.send('welcome', 'Welcome to the Natours Family!');
      }
    
      async sendPasswordReset() {
        await this.send(
          'passwordReset',
          'Your password reset token (valid for only 10 minutes)'
        );
      }
};
    
