import express from 'express'
import { sendmessage , translatemessage} from '../controllers/messageCONTROLLER.js'
import check_login from '../middlewares/check_login.js'



const messageROUTER = express.Router()



messageROUTER.post( '/send/message' ,  check_login  , sendmessage )


messageROUTER.post( '/translate' ,  check_login  , translatemessage )



export default messageROUTER