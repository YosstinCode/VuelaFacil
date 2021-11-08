const { FireStore } = require("../firebase/Firebase");

const getEntityWhitWhere = (
  collection,
  fieldToCompare,
  operatorToCompare,
  valueToCompare,
  next
) => {
  return FireStore.collection(collection)
    .where(fieldToCompare, operatorToCompare, valueToCompare)
    .get()
    .then((query) => {
      let arr = [];

      query.forEach((doc) => {
        arr.push(doc.data());
      });
      return arr;
    })
    .catch((e) => next(e));
};

module.exports = getEntityWhitWhere;
