//db
const { FireStore, FireAuth } = require("../firebase/Firebase");

//utils
const getAllEntities = require("../utils/getAllEntities");
const createNewEntity = require("../utils/createNewEntity");
const getEntityWhitWhere = require("../utils/getEntityWhitWhere");
const getDocIdsWhitWhere = require("../utils/getDocsIdsWhitWhere");

//models
const User = require("../models/User");

const getAllUsers = (req, res, next) => {
  getAllEntities("users", next).then((result) => res.status(200).send(result));
};

const createNewUser = (req, res, next) => {
  let { name, user_name, terms_and_conditions } = req.body;

  const user = new User(
    (name = name),
    (user_name = user_name),
    (terms_and_conditions = terms_and_conditions)
  );

  createNewEntity("users", user, next);

  res.status(201).json(user);
};

const getUser = (req, res, next) => {
  let { field, value } = req.params;

  getEntityWhitWhere("users", field, "==", value, next).then((entities) =>
    res.status(200).send(entities)
  );
};

const updateUser = (req, res, next) => {
  let { field, value, valueToUpdate } = req.params;

  let documentsIds = getDocIdsWhitWhere("users", field, "==", value, next);

  documentsIds.then((docsIds) =>
    docsIds.map((docId) =>
      FireStore.collection("users")
        .doc(docId)
        .update({ [field]: valueToUpdate })
        .then((result) => res.status(200).send(result.writeTime))
        .catch((e) => next(e))
    )
  );
};

const deleteUser = (req, res, next) => {
  let { field, value } = req.params;

  let docsIds = getDocIdsWhitWhere("users", field, "==", value, next);

  docsIds.then((docsIds) =>
    docsIds.map((docId) =>
      FireStore.collection("users")
        .doc(docId)
        .delete()
        .then((result) => res.status(204).send(result.writeTime))
        .catch((e) => next(e))
    )
  );
};

// const userSigIn = (req, res, next) => {
//   let { email, password, displayName } = req.body;

//   FireAuth.createUser({
//     email,
//     password,
//     displayName,
//   })
//     .then((userRecord) => {
//       // See the UserRecord reference doc for the contents of userRecord.
//       console.log("Successfully created new user:", userRecord.uid);
//       res.status(201).send(userRecord.toJSON());
//     })
//     .catch((error) => {
//       console.log("Error creating new user:", error);
//       next(error);
//     });
// };

module.exports = {
  createNewUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getUser,
  // userSigIn,
};
