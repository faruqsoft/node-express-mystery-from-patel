const express = require("express");

//1st step - create an express app
const app = express();
PORT = 3000;

//2nd step - define routes
app.get("/api/v1/user/home", (req, res) => {
  /*
    //res.send(<h1>Welcome to the Home Page!</h1>);//express automatically understand that we are sending html
    const user ={
        name: 'John Doe',
        age: 30,
        occupation: 'Developer'
    };
    res.send(user); // express automatically understood json response
   
    res.json(user); // express automatically understood json response
    
    */
  res.send("Welcome to the Home Page, ok"); // express automatically understood text response
});
app.get("/api/v1/user/about", (req, res) => {
  res.status(200).json({
    status: "success",  
    message: "This is the about page of our user API.",
  });
  res.end();
});

app.get("/api/v1/user/profile", (req, res) => {
  res.status(200).json({
    status: "success",
    user: {
      name: "Jane Smith",
      age: 25,
      occupation: "Designer",
    },
  });
  res.end();
});

app.get("/api/v1/product/:productId/comment:commentId", (req, res) =>{//:productId is a route parameter and we can access it using req.params object
  //const productId = req.params.productId;
  //const commentId = req.params.commentId;
  //dynamic value from the URL and we can use it to fetch product details from database and here we are just simulating it
  const {productId,commentId} = req.params;//destructuring assignment to extract productId from req.params object
  console.log("Product ID requested:", productId,commentId);
  //params holds all the route parameters as key value pairs
  //params is used to capture dynamic values from the URL
  // product = {
  //   id: productId,
  //   name: "Sample Product",
  //   price: 19.99,
  // }

  res.status(200).json({//response with product details
    status: "success",
    product: {
      id: productId,
      name: "Sample Product",
      price: 19.99,
    },
  });
  res.end();    
});

app.post("/api/v1/user/login", (req, res) => {
  // In a real application, you would handle user authentication here
  res.status(200).json({
    status: "success",
    message: "User logged in successfully.",
  });
  res.end();
});



//3rd step - start a server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
