//controllers
const promotionController = require("../controllers/promotionController");

//express
const express = require("express");
const router = express.Router();

router.get("/", promotionController.getAllPromotions);

module.exports = router;
