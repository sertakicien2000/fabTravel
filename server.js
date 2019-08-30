const express = require("express");
const resy =require ("./config/db")
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
require("./routes/api/details.js")(app);

// Connect to the Mongo DB
mongoose.connect(resy.db_uri, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database")    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err)
  process.exit()
})
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});