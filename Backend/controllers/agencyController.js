//db
const { FireStore } = require("../firebase/Firebase");

//utils
const getAllEntities = require("../utils/getAllEntities");
const createNewEntity = require("../utils/createNewEntity");
const getEntityWhitWhere = require("../utils/getEntityWhitWhere");
const getDocIdsWhitWhere = require("../utils/getDocsIdsWhitWhere");

//models
const Agency = require("../models/Agency");

const getAllAgencies = (req, res, next) => {
  getAllEntities("agencies", next).then((result) =>
    res.status(200).send(result)
  );
};

const createNewAgency = (req, res, next) => {
  let { name, description, phone_number, terms_and_conditions } = req.body;

  const agency = new Agency(
    (name = name),
    (description = description),
    (phone_number = phone_number),
    (terms_and_conditions = terms_and_conditions)
  );

  createNewEntity("agencies", agency, next);

  res.status(201).json(agency);
};

const getAgency = (req, res, next) => {
  let { field, value } = req.params;

  getEntityWhitWhere("agencies", field, "==", value, next).then((entities) =>
    res.status(200).send(entities)
  );
};

const updateAgency = (req, res, next) => {
  let { field, value, valueToUpdate } = req.params;

  let documentsIds = getDocIdsWhitWhere("agencies", field, "==", value, next);

  documentsIds
    .then((docsIds) =>
      docsIds.map((docId) =>
        FireStore.collection("agencies")
          .doc(docId)
          .update({ [field]: valueToUpdate })
          .then((result) => res.status(200).send(result.writeTime))
          .catch((e) => next(e))
      )
    )
    .catch((e) => next(e));
};

const deleteAgency = (req, res, next) => {
  let { field, value } = req.params;

  let docsIds = getDocIdsWhitWhere("agencies", field, "==", value, next);

  docsIds.then((docsIds) =>
    docsIds.map((docId) =>
      FireStore.collection("agencies")
        .doc(docId)
        .delete()
        .then((result) => res.status(204).send(result.writeTime))
        .catch((e) => next(e))
    )
  );
};

module.exports = {
  getAllAgencies,
  createNewAgency,
  getAgency,
  updateAgency,
  deleteAgency,
};
