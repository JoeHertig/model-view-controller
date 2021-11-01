const exphbs = require("express-handlebars");
const { appendFile } = require("fs");
const hbs = exphbs.create({});

appendFile.engine("handlebars", hbs.engine);
appendFile.set("view engine", "handlebars");
