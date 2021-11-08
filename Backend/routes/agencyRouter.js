//controllers

const agencyController = require("../controllers/agencyController");

//express
const express = require("express");
const router = express.Router();

router.get("/", agencyController.getAllAgencies);
router.post("/", agencyController.createNewAgency);
router.get("/:field/:value", agencyController.getAgency);
router.put("/:field/:value/:valueToUpdate", agencyController.updateAgency);
router.delete("/:field/:value", agencyController.deleteAgency);

module.exports = router;
