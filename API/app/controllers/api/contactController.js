const nodemailer = require("nodemailer");

const contactController = {


    async mail(req,res) {
      
      try {

    const {from,subject,text} = req.body;
    console.log({from, subject, text}) ;
  

    let transporter = nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSMAIL
      }
    })
    
    let mailOptions = {
      to:'testatelierrc@gmail.com',
      from: req.body.from,
      subject : req.body.subject,
      text: req.body.text
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