var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
var favicon = require("serve-favicon");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var helmet = require("helmet");
var routes = require("./routes.js");
var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public/emaillander.ico")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set("views", path.join(__dirname, "public/views"));
app.engine(".hbs", exphbs({
  defaultLayout: "layout",
  layoutsDir: path.join(__dirname, "public/views/layouts"),
  partialsDir: path.join(__dirname, "public/views/partials"),
  extname: ".hbs"
}));
app.set("view engine", ".hbs");
app.use(helmet());
app.use(morgan("dev"));
app.set("PORT", process.env.PORT|| 7678);
app.set("NODE_ENV", process.env.NODE_ENV || "development");

app.use("/", routes);

app.listen(app.get("PORT"), function(){
  console.log("Your Node Email Application is listening on port: %s.", app.get("PORT"));
  console.log("Environment: %s", app.get("NODE_ENV"));
});
