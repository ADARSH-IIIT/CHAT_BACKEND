import messageREFERENCE from "../modals/messageSCHEMA.js";
import { translate } from "google-translate-api-browser";



async function sendmessage(req , res){

try {
    
    
    const {receiverid , content , belongs_to } = req.body
    const {_id} = req.userdetails



    const newmssg = {
         
        sender : _id ,
        receiver : receiverid ,
        content : content  , 
        belongs_to : belongs_to
    }
   
    const saver = await messageREFERENCE.create(newmssg)

     res.json({mssg : "mssg saved to db"})

} catch (error) {

    console.log("error to save send mssg to database");
    
}


}





//// npm i google-translate-api-browser


async function translatemessage( req , res){
  

    try {

      const { message , to }  = req.body 
  
      const resp = await   translate(  message , { to: to , corsUrl: "https://cors-anywhere.herokuapp.com/" })
  
    //   console.log(resp.text);
      res.json({error : false , translated_message : resp.text})
      
    } catch (error) {
  
      console.log("error to translate mssg at backend controller");
    res.json({ error : true , mssg : "error to translate mssg , pls try again " })
      
    }
    
  }











export  {sendmessage ,translatemessage }