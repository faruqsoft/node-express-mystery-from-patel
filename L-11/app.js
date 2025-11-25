import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';



dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());    
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/v1/user/register', (req, res) => {
  const obj = req.body;// Assuming body-parser middleware is used to parse JSON body
  console.log(obj);
  res.status(200).json({
    success: true,
    message: 'User registered successfully',
    
  });   
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
