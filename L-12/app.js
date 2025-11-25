import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();// Load environment variables from .env file

const app = express();// Create an Express application
const PORT = process.env.PORT || 3000;// Define the port number

app.use(function (req, res, next) {// Custom middleware function
    console.log('Middleware executed');
    next();// Proceed to the next middleware or route handler
})

app.get('/', (req, res) => {
  res.send("hello world");   
    });



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
