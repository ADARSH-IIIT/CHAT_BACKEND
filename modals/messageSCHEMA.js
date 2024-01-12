
import mongoose from "mongoose";

  
const messageSchema = new mongoose.Schema({ 


    belongs_to : {     type: mongoose.Schema.Types.ObjectId, ref: "chat"    }  ,

    sender : {  type: mongoose.Schema.Types.ObjectId, ref: "userdetail"  }  ,
    
    receiver  : {  type: mongoose.Schema.Types.ObjectId, ref: "userdetail"  } ,

    content : { type : String }

   
}  , {timestamps:true} ) 
  
const messageREFERENCE = new mongoose.model("message", messageSchema)


export default messageREFERENCE