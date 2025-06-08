const express = require("express");
const router = express.Router();

const UserController = require("../controllers/usercontrollers.js");

router.post("/", UserController.createUser);
router.get("/", UserController.getAllusers);
router.get("/:id", UserController.getUserById);
router.patch("/:id",UserController.updateUser);
router.delete("/:id",UserController.deleteuser);

module.exports = router;
