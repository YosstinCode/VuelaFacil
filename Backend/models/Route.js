module.exports = class Route {
  constructor(
    route_code,
    destination_city,
    origin_city,
    price,
    departure_date,
    return_date,
    discount,
    plane,
    creation_date = new Date()
  ) {
    if (typeof route_code !== "string")
      throw new TypeError(
        `type of route_code should be string not expected: ${typeof route_code}`
      );

    if (typeof destination_city !== "string")
      throw new TypeError(
        `type of destination_city should be string not expected: ${typeof destination_city}`
      );

    if (typeof origin_city !== "string")
      throw new TypeError(
        `type of origin_city should be string not expected: ${typeof origin_city}`
      );

    if (typeof price !== "number")
      throw new TypeError(
        `type of price should be number not expected: ${typeof price}`
      );

    if (!departure_date instanceof Date)
      throw new TypeError(`type of departure_date should be Date`);

    if (!return_date instanceof Date)
      throw new TypeError(`type of return_date should be Date`);

    if (typeof discount !== "number")
      throw new TypeError(
        `type of discount should be number not expected: ${typeof discount}`
      );

    if (!plane instanceof Array)
      throw new TypeError(`type of plane should be Array`);

    this.route_code = route_code;
    this.destination_city = destination_city;
    this.origin_city = origin_city;
    this.price = price;
    this.departure_date = departure_date;
    this.return_date = return_date;
    this.discount = discount;
    this.plane = plane;
    this.creation_date = creation_date;

    return {
      route_code,
      destination_city,
      origin_city,
      price,
      departure_date,
      return_date,
      discount,
      plane,
      creation_date,
    };
  }
};
