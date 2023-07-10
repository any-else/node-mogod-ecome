require('dotenv').config();
//init database mongoDB
require('./db/connect.mongoDB');
const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const Router = require('./routes/index');
const createError = require('http-errors');
const Redis = require('ioredis');
const RedisStore = require('connect-redis').default;
const clientRedis = new Redis();

const path = require('path');

const app = express();

//init middleware global
app.use(express.urlencoded());
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(
  session({
    secret: 'vu dep trai',
    store: new RedisStore({ client: clientRedis }),
    resave: false,
    saveUninitialized: true, //bất kể có
    cookie: {
      secure: false,
      httpOnly: true,
    },
  })
);

//use file public
app.use('/public', express.static('public'));

// Config view for ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Router
Router(app);
//handling error
//handle url api error
app.use((req, res, next) => {
  const errors = createError(404, 'Not Found');
  next(errors);
});
//handle error route
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message } || 'Internal Server Error');
});

module.exports = app;
