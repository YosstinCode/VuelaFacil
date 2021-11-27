//db
const { FireStore } = require("../firebase/Firebase");

//utils
const getAllEntities = require("../utils/getAllEntities");

//model
const Promotion = require("../models/Promotion");

const getAllPromotions = (req, res, next) => {
  getAllEntities("promotions", next).then((result) =>
    res.status(200).send(result)
  );
};

module.exports = {
  getAllPromotions,
};
