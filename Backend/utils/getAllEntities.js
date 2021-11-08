const { FireStore } = require("../firebase/Firebase");

const getAllEntities = (collection, next) => {
  return FireStore.collection(collection)
    .get()
    .then((query) => {
      const arr = [];

      query.forEach((doc) => {
        arr.push(doc.data());
      });

      return arr;
    })
    .catch((e) => next(e));
};

module.exports = getAllEntities;
