//controllers

const userController = require("../controllers/userController");

//express
const express = require("express");
const router = express.Router();

router.get("/", userController.getAllUsers);
router.post("/", userController.createNewUser);
// router.post("/sigin", userController.sigIn);
router.get("/:field/:value", userController.getUser);
router.put("/:field/:value/:valueToUpdate", userController.updateUser);
router.delete("/:field/:value", userController.deleteUser);

module.exports = router;
