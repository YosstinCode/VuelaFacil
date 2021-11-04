const { initializeApp } = require("firebase/app");

const { getFirestore, collection, addDoc } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAkuWVewppCfqMSNZps7_NPjgku546BIGk",
  authDomain: "vuela-facil-grupo-10.firebaseapp.com",
  projectId: "vuela-facil-grupo-10",
  storageBucket: "vuela-facil-grupo-10.appspot.com",
  messagingSenderId: "712616377986",
  appId: "1:712616377986:web:e2971c60fd2206ea06fe9b",
  measurementId: "G-0GN3TQW78Z",
};

const appInitialized = initializeApp(firebaseConfig);

const db = getFirestore();

try {
  const docRef = async () =>
    await addDoc(collection(db, "users"), {
      firstName: "Nataly",
      lastName: "Carvajal",
      born: 2002,
    });

  console.log("Document written with ID: ");
} catch (e) {
  console.error("Error adding document: ", e);
}
