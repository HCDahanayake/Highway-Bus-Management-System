require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const foundItemRoutes = require('./routes/foundItemsRoutes')
const lostItemRoutes = require('./routes/lostItemsRoutes')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

const cors = require("cors");
app.use("*", cors());

app.use('/founditems', foundItemRoutes);
app.use('/lostitems', lostItemRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connect to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    });