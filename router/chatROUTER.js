import express from 'express'
import { accesschat , getoldmessage  , fetchchats} from '../controllers/chatCONTROLLER.js'
import check_login from '../middlewares/check_login.js'



const chatROUTER = express.Router()



chatROUTER.post( '/accesschat/:receiverid' ,  check_login  , accesschat )

chatROUTER.get( '/getoldmessage/:chat_id' ,  check_login  , getoldmessage )

chatROUTER.get( '/fetchchats' ,  check_login  , fetchchats )



export default chatROUTER