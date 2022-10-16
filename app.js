const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const { router } = require("./routes/wallets.routes.js");
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

app.use("/", router);

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
      console.log(`Link:http://localhost:${PORT}/`);
    })
  )
  .catch((err) => {
    console.log(err.message);
  });
