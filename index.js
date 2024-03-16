const express = require('express');
const app = express();
require("dotenv").config();
const database = require("./config/database");
database.connect();
const systemConfig = require("./config/system");
const port = process.env.PORT;
const methodOverride = require("method-override");
const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");
app.locals.prefixAdmin = systemConfig.prefixAdmin;
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.set('views','./views');
app.set('view engine','pug');
route(app);
routeAdmin(app);
app.listen(port, ()=>{
    console.log(port);
})