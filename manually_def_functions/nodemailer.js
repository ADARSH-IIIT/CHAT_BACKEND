import nodemailer from 'nodemailer'

async function sendEmail( clientmail , subject , actual_msg , otpmssg   ) {


    try {
        // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        
        host: "smtp.gmail.com",
        
        
        secure: true, // enforcing secure transfer
        auth: {
          user: 'adarshdwivedi251@gmail.com',
          pass: 'vhuw hvpj ajhl guhx'
        } ,
        tls: {
            rejectUnauthorized: false
        }
      });
    
      // Set up email data
      let mailOptions = {
        from: 'adarshdwivedi251@gmail.com',
        to: clientmail ,
        subject: subject,
        text: ` ${actual_msg} \n\n ${otpmssg}`
      };
    
      // Send email
      let info = await transporter.sendMail(mailOptions);
    
      console.log('Message sent: %s', info.messageId);
    
    } catch (error) {


        console.log(error);
        console.log("error to send mail");
        
    }



    }
  

    export default sendEmail
  