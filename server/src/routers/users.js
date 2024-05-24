const express = require("express");
const {selectUsers} = require("../controllers/userControllers")
const userRouters = express.Router();

userRouters.get("/users", selectUsers);

module.exports = userRouters;
