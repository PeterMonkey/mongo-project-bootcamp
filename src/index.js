import express from 'express'
import bodyParser from 'body-parser'
import studentRoute from './routes/studentRoutes.js'
import teacherRoute from './routes/teacherRoute.js'
 
import { conn } from './db/connect.js'

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

//routes
app.use(studentRoute)
app.use(teacherRoute)

conn()

app.listen(5000, () => {
    console.log('Escuchando al puerto 5000')
})