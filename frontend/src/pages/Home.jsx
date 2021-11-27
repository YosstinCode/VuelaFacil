import React from "react";
import Promo from "../components/Main/Promo/Promo";
import ListRoute from "../components/Main/Route/ListRoute";
import Route from "../components/Main/Route/Route";
import Seeker from "../components/Main/Seeker/Seeker";

import Layout from "./Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <Seeker />
        <ListRoute />
      </Layout>
    </>
  );
};

export default Home;
