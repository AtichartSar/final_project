require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const port = process.env.port ||3000

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userRoutes = require('./routes/user')
const menuRoutes = require('./routes/menu')
const invoiceRoutes = require('./routes/invoice')
const menuTypeRoutes = require('./routes/menuType')
const reviewRoutes = require('./routes/review')


app.use('/uploads', express.static('uploads'));
app.use('/user',userRoutes)
app.use('/menu',menuRoutes)
app.use('/invoice',invoiceRoutes)
app.use('/menuType',menuTypeRoutes)
app.use('/review',reviewRoutes)


require('./config/passport/passport')
const db = require('./models/index')
// db.sequelize.sync({force:true}).then(() =>{
db.sequelize.sync().then(() =>{
    app.listen(port, () => {
        console.log(`server start port ${port}`);
    })
})