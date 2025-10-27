
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const patientRoutes = require("./routes/patientRoutes");

const app = express();
connectDB();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/patients", patientRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(5000, () => console.log("Server running on port 5000"));
