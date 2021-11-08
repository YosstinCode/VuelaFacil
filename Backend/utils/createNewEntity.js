const { FireStore } = require("../firebase/Firebase");

const createNewEntity = (collectionName, data, next) => {
  if (typeof data !== "object") throw new Error("type of data not is correct");

  FireStore.collection(collectionName)
    .doc()
    .set(data)
    .then((res) => console.log(res))
    .catch((e) => next(e));
};

module.exports = createNewEntity;
