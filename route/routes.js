const express = require("express");
const route = express.Router();

const userData = require("../controller/user");
const get_data = require("../controller/read_data");
const update = require("../controller/update");

route.post("/new_user", userData.userData);
route.get("/:id", get_data.get_data);
route.patch("/:id", update.update);
route.delete("/:id", update.delete);

module.exports = route;
