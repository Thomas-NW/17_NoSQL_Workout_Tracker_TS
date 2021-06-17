const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();
const routes = require("./controllers/main");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

app.use(express.static("public"));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// routes
// app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});