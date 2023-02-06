require("dotenv").config();

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
var cors = require("cors")
var app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const freelanceJobRoutes = require("./routes/freelanceJob");
const freelanceProfileRoutes = require("./routes/freelanceProfile");


mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", freelanceJobRoutes);
app.use("/api", freelanceProfileRoutes);


app.listen(8080, ()=>{console.log("App us running on port 8080")})