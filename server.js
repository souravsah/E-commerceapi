const mongoose = require('mongoose')
const app = require('./app')
const dotenv = require('dotenv')


process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
  });



dotenv.config({
    path:'./config.env'
})
const port = process.env.PORT || 3000;
const DB = `${process.env.DATABASE}`.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
)

mongoose.connect(DB,{}).then(()=>{
console.log(`Datbase connection successfull...`)
})

app.listen(port,()=>{
    console.log(`Listining to port...`)
})

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });
  
  process.on('SIGTERM', () => {
    console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
    server.close(() => {
      console.log('💥 Process terminated!');
    });
  });
  