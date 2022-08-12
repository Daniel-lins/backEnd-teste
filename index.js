const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log("SERVER CONNECT"));
