const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const contactRoute = require('./src/routes/contactRoute')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require ('./swagger-output.json')


app.use(bodyParser.urlencoded({ extended: false }));
app.use('/docs', swaggerUi.serve,swaggerUi.setup(swaggerFile))
app.use(contactRoute)

app.set('view engine', 'ejs')
app.set('views', './src/views/')
app.use(express.static(__dirname));

app.listen(3000, function(){
    console.log('App rodando na porta 3000')
})