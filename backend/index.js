const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db')
const cors = require('cors')


mongoDB();

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-allow-Origin","https://mernapp-frontend-1ocp.onrender.com");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin,X-Requested-With, Content-Type, Accept"
//     );
//     next();
// })

//cors properly

app.use(cors({
  origin: "https://mernapp-frontend-1ocp.onrender.com",  // Allow frontend URL
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization"
}));

//middleware
app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})