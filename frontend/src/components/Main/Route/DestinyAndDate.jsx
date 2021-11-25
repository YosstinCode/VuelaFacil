import React from "react";
import regreso from "../../../assets/regreso.png";
import ida from "../../../assets/ida.png";

const DestinyAndDate = ({ going = false, city, date }) => {
  return (
    <div>
      <div className="flex self-start gap-1 text-base">
        <img className="w-6" src={going ? ida : regreso} alt="icon-flight" />
        <h3 className="text-purple-700">
          <span className="font-bold pr-1">{going ? "IDA:" : "VUELTA:"}</span>
          {city}
        </h3>
      </div>
      <h3 className="text-pink-600 font-semibold ">{date}</h3>
    </div>
  );
};

export default DestinyAndDate;
