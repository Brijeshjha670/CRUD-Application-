const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path  = require('path');

const app = express();

//declare the path and inform the express to use env file 
dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//log requests 
app.use(morgan('tiny'));

//parse requests to body-parser
app.use(bodyparser.urlencoded({extended:true}));

//set view engines
app.set("view engine","ejs");

//for reference if you are using and other folder other than views for ejs file
//app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/CSS',express.static(path.resolve(__dirname,"assets/CSS")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));


app.get('/', (req, res) => {
  res.send('Crud Application');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
