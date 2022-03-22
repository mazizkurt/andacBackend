const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const getUsers = require('./router/get/users');
const getSchools = require('./router/get/schools');
const getPrinces = require('./router/get/prices');
const postUsers = require('./router/post/users');
const postSchools = require('./router/post/schools');
const postPrinces = require('./router/post/princes');
const postLogin = require('./router/post/login');
const middleware = require('./middleware');
require('dotenv/config');
const PORT = process.env.PORT || 3500

const app = express();

app.use(express.json());
app.use('/docs/api',swaggerUi.serve,swaggerUi.setup(swaggerDocument));
app.use(`/${process.env.VERSION}/get`,middleware,getUsers);
app.use(`/${process.env.VERSION}/get`,middleware,getSchools);
app.use(`/${process.env.VERSION}/get`,middleware,getPrinces);
app.use(`/${process.env.VERSION}/post`,middleware,postUsers);
app.use(`/${process.env.VERSION}/post`,middleware,postSchools);
app.use(`/${process.env.VERSION}/post`,middleware,postPrinces);
app.use(`/${process.env.VERSION}/post`,postLogin);

app.listen(PORT,()=>console.log(PORT+' dinleniyor...'))
