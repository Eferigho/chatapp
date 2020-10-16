const express = require('express')
const http = require('http')
const app = express()
const dotenv = require('dotenv')
const socketio = require('socket.io')
const server = http.createServer(app)
const io = socketio(server)
const mainRoute = require('./routes/route')

app.use('/',mainRoute)

dotenv.config({path:'./config.env'})

const PORT = process.env.PORT || 2300

io.on('connect',(socket)=>{
    console.log('user connected')

    socket.on('join',(data)=>{
        console.log(`welcome ${data.username} to ${data.room}`)
    })

    socket.on('disconnect',()=>{
        console.log('user Disconnected')
    })
})

server.listen(PORT,()=>{
    console.log(`running on port ${PORT}`)
})
