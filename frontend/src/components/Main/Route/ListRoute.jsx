import React from "react";
import Route from "./Route";

const ListRoute = () => {
  return (
    <section className="flex flex-col items-center md:flex-row md:justify-center md:gap-16 lg:gap-8">
      <Route />
      <Route />
      <Route />
      <Route />
    </section>
  );
};

export default ListRoute;
