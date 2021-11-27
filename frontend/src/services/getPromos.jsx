import react, { useEffect } from "react";

export const getPromos = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/promotion");
    const data = await res.json();
    return data;
  } catch (e) {
    return console.error(e);
  }
};
