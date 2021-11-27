const admin = require("firebase-admin");

const serviceAccount = require("./vuela-facil-grupo-10-d2c6f44ad686.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = { FireStore: admin.firestore(), FireAuth: admin.auth() };
