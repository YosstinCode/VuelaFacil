const admin = require("firebase-admin");

const serviceAccount = require("./vuela-facil-grupo-10-d2c6f44ad686.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const createNewEntity = (collectionName, data) => {
  if (typeof data !== "object") throw new Error("type of data not is correct");

  db.collection(collectionName)
    .doc()
    .set(data)
    .then((res) => console.log(res))
    .catch((e) => console.error("Error adding document: ", e));
};

// for to add a users in firestore

createNewEntity("users", {
  name: "yosstin",
  user_name: "yosstinCode",
  terms_and_conditions: true,
  creation_date: new Date(),
});

// for to add a agency in firestore

createNewEntity("agency", {
  name: "Avianca",
  description: "Esta es una descripcion de la empresa",
  phone_number: "123456",
  terms_and_conditions: true,
  creation_date: new Date(),
});

// for to add a route in firestore

createNewEntity("route", {
  route_code: "A15",
  destination_city: "Mexico",
  origin_city: "Colombia",
  price: 1_000_000,
  departure_date: new Date("2021-12-13"),
  return_date: new Date("2021-12-20"),
  discount: 0.5,
  plane: [
    {
      plane_code: "12",
      seats_economyc_class: 20,
      seats_business_class: 20,
      seats_first_class: 20,
    },
  ],
});

/*++++++++++++++++++++++++++++++++++*/

//for delete a users in firestore

// db.collection("users")
//   .doc("aMNdfNgspfnLdvka1OHr") //-> name or id of document in collection users
//   .delete()
//   .then((res) => console.log(res))
//   .catch((e) => console.error("Error removing document: ", e));

//for delete a agency in firestore

// db.collection("agency")
//   .doc("aMNdfNgspfnLdvka1OHr") //-> name or id of document in collection users
//   .delete()
//   .then((res) => console.log(res))
//   .catch((e) => console.error("Error removing document: ", e));
