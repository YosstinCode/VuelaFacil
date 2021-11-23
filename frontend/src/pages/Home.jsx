import React from "react";
import Promo from "../components/Main/Promo/Promo";
import Seeker from "../components/Main/Seeker/Seeker";

import Layout from "./Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <Seeker />
        <Promo />

      </Layout>
    </>
  );
};

export default Home;
