import express from 'express'
import authROUTER from '../router/authROUTER.js'
import connect_to_db from '../database/connect_to_db.js'
import dotenv from 'dotenv'
dotenv.config({path : "./ENV/details.env"})
import cookiePARSER from 'cookie-parser'
import chatROUTER from '../router/chatROUTER.js'
import messageROUTER from '../router/messageROUTER.js'
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'




const server = express()


connect_to_db(process.env.URL)


server.use(cookiePARSER())
server.use(express.json())
server.use(   cors(  {credentials: true, origin: 'https://chat-frontend-secure-o74pkd8l2-adarsh-dwivedis-projects.vercel.app'}   )      )



server.use(authROUTER)

server.use(chatROUTER)

server.use(messageROUTER)



const newserver = http.createServer(  server   )

const BackendSwitch = new Server(  newserver  , {  cors : { origin : "https://chat-frontend-secure-o74pkd8l2-adarsh-dwivedis-projects.vercel.app/" } } )




BackendSwitch.on(   'connection' , (backendsocket)=>{


    console.log("new user connected with id " , backendsocket.id);

    backendsocket.on( 'disconnect' , ()=>{ console.log("user disconnected of id " , backendsocket.id); } )



    backendsocket.on( 'join chat room'  , (info)=>{ console.log("joining chat room with info", info);   backendsocket.join(info.room)      }  )

    backendsocket.on( 'leave room' , ()=>{console.log("leaving chat room");} )


    backendsocket.on('private message' , (info)=>{console.log("private mssg of info " , info);  backendsocket.to(info.room).emit('received message' , { error : false ,   message : info.message})           })


}    )


// server.get('/' ,  (req , res)=>{ res.json({mssg:"this is get request"}) })




export default newserver