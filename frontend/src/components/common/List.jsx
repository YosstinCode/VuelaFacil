import React from "react";

const List = ({ children }) => {
  return (
    <section className="place-items-center w-10/12 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-8">
      {children}
    </section>
  );
};

export default List;
