import React from "react";

const ItemSocial = (props) => {
  return (
    <article className="mx-4  md:flex md:mx-8">
      <img src={props.image} alt="" />
      <h4 className="hidden  md:inline md:mx-4  lg:text-lg">{props.text}</h4>
    </article>
  );
};

export default ItemSocial;
