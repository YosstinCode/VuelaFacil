import React, { useEffect, useState } from "react";
import { getPromos } from "../services/getPromos";

const usePromos = () => {
  const [promos, setPromos] = useState([]);
  useEffect(() => {
    getPromos().then((data) => setPromos(data));
  }, []);

  return {
    promos,
  };
};

export default usePromos;
