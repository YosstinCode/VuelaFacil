//controllers
const routeController = require("../controllers/routeController");

//express
const express = require("express");
const router = express.Router();

router.get("/", routeController.getAllRoutes);
router.post("/", routeController.createNewRoute);
router.get("/:field/:value", routeController.getRoute);
router.put("/:field/:value/:valueToUpdate", routeController.updateRoute);
router.delete("/:field/:value", routeController.deleteRoute);

module.exports = router;
