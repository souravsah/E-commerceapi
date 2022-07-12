const express = require('express')
const cookieParser = require('cookie-parser')
const globalError = require('./controllers/errorController')
const userRouter = require('./routes/userRouter')
const navadRouter = require('./routes/navadRouter')
const productRouter = require('./routes/productRouter')
const wishlistRouter = require('./routes/wishlistRouter')
const cors = require('cors')
const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
app.use(cors())

app.options('*', cors());
//app.use('/api/v1/wishist',wishlistRouter)
app.use('/api/v1/product',productRouter)
app.use('/api/v1/users', userRouter);
app.use('/api/v1/navad', navadRouter)
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });
  

app.use(globalError)

module.exports=app;