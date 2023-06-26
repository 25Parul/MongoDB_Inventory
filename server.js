/* eslint-disable no-undef */
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
require("./config/database.js");

const { createItem, getItem } = require("./controllers/items.js")

const app = express();
app.use(express.json());


app.post("/items", createItem)

app.get("/items", getItem)


// Start the server
const port = 3004;
app.listen(port, ()=>{
    console.log("Server is up on port", port)
});