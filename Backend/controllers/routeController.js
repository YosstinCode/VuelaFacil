//db
const { FireStore } = require("../firebase/Firebase");

//utils
const getAllEntities = require("../utils/getAllEntities");
const createNewEntity = require("../utils/createNewEntity");
const getEntityWhitWhere = require("../utils/getEntityWhitWhere");
const getDocIdsWhitWhere = require("../utils/getDocsIdsWhitWhere");

//models
const Route = require("../models/Route");

const getAllRoutes = (req, res, next) => {
  getAllEntities("route", next).then((result) => res.status(200).send(result));
};

const createNewRoute = (req, res, next) => {
  let {
    route_code,
    destination_city,
    origin_city,
    price,
    departure_date,
    return_date,
    discount,
    plane,
  } = req.body;

  departure_date = new Date("2021-12-13");
  return_date = new Date("2021-12-24");

  const route = new Route(
    (route_code = route_code),
    (destination_city = destination_city),
    (origin_city = origin_city),
    (price = price),
    (departure_date = departure_date),
    (return_date = return_date),
    (discount = discount),
    (plane = plane)
  );

  createNewEntity("route", route, next);

  res.status(201).json(route);
};

const getRoute = (req, res, next) => {
  let { field, value } = req.params;

  getEntityWhitWhere("route", field, "==", value, next).then((entities) =>
    res.status(200).send(entities)
  );
};

const updateRoute = (req, res, next) => {
  let { field, value, valueToUpdate } = req.params;

  let documentsIds = getDocIdsWhitWhere("route", field, "==", value, next);

  documentsIds
    .then((docsIds) =>
      docsIds.map((docId) =>
        FireStore.collection("route")
          .doc(docId)
          .update({ [field]: valueToUpdate })
          .then((result) => res.status(200).send(result.writeTime))
          .catch((e) => next(e))
      )
    )
    .catch((e) => next(e));
};

const deleteRoute = (req, res, next) => {
  let { field, value } = req.params;

  let docsIds = getDocIdsWhitWhere("route", field, "==", value, next);

  docsIds.then((docsIds) =>
    docsIds.map((docId) =>
      FireStore.collection("route")
        .doc(docId)
        .delete()
        .then((result) => res.status(204).send(result.writeTime))
        .catch((e) => next(e))
    )
  );
};

module.exports = {
  getAllRoutes,
  createNewRoute,
  getRoute,
  updateRoute,
  deleteRoute,
};
