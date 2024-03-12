const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const route = require("./routes/client/index.route");
app.use(express.static('public'));
app.set('views','./views');
app.set('view engine','pug');
route(app);
app.listen(port, ()=>{
    console.log(port);
})