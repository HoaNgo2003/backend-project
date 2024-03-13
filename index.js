const express = require('express');
const app = express();
require("dotenv").config();
const database = require("./config/database");
database.connect();
const port = process.env.PORT;
const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");
app.use(express.static('public'));
app.set('views','./views');
app.set('view engine','pug');
route(app);
routeAdmin(app);
app.listen(port, ()=>{
    console.log(port);
})