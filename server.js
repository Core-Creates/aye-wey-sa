const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passport = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = 3001;

// Define middleware here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin:"https://aye-way-sa.herokuapp.com/",
  credentials:true
}));

app.use(expressSession({
  secret:process.env.SECRET,
  resave:true,
  saveUninitialized: true,

}));

app.use(cookieParser(process.env.SECRET));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT 3001!`);
});
