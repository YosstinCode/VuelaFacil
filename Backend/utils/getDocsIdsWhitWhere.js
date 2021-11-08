const { FireStore } = require("../firebase/Firebase");

const getDocIdsWhitWhere = (
  collection,
  fieldToCompare,
  operatorToCompare,
  valueToCompare,
  next
) => {
  return FireStore.collection(collection)
    .where(fieldToCompare, operatorToCompare, valueToCompare)
    .get()
    .then((querys) => {
      if (querys.empty) throw new Error("query is empty");

      let documentsIds = [];

      querys.forEach((query) => {
        documentsIds.push(query.id);
      });

      return documentsIds;
    })
    .catch((e) => next(e));
};

module.exports = getDocIdsWhitWhere;
