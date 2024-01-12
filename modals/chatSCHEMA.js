import mongoose from "mongoose";


  
const ChatSchema = new mongoose.Schema({ 


    users : [ {   type: mongoose.Schema.Types.ObjectId, ref: "userdetail"  }  ]  ,


    } 

) 
  
const chatREFERENE = new mongoose.model("chat",  ChatSchema  )


export default chatREFERENE