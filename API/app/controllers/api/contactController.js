const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');


const contactController = {


    async mail(req,res) {
      
      try {

    const {from,subject,text, firstname, lastname} = req.body;
    console.log({from,subject,text, firstname, lastname}) ;
  

    let transporter = nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSMAIL
      }
    })

  //   transporter.use('compile', hbs({
  //     viewEngine: 'express-handlebars',
  //     viewPath: '../../emails/layouts/'
  // }));
  

  let mailOptions = {
    from: req.body.from,
    to: 'testatelierrc@gmail.com', 
    subject: req.body.subject,
    text: req.body.text,
    template: 'index',
};
    
    await transporter.sendMail(mailOptions, function(err, data) {
      if(err) {
        console.log('Error occurs');
      } else {
        console.log('Email sent!');
      }
      });
    

    }

    catch (error) {
      console.trace(error);
    }

  }
}

    

    module.exports = contactController;