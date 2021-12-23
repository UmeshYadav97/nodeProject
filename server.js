const express = require('express');
const cors = require('cors');

const middleWare = require('./middleWares');
const controller = require('./controllers')
require('./DBconnect')();

const app = express();


app.use(express.urlencoded({ extended: false }))
.use(express.json())
.use(cors())
.post('/login',controller.login)
.post('/signup',controller.signup)
.use(middleWare.auth)
.get('/home',controller.home)

app.listen(8080, () => console.log('listening on 8080...'))