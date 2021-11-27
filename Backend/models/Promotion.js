module.exports = class Promotion {
  constructor(destination_city, origin_city, discount, image) {
    if (typeof destination_city !== "string")
      throw new TypeError(
        `type of destination_city should be string not expected: ${typeof destination_city}`
      );

    if (typeof origin_city !== "string")
      throw new TypeError(
        `type of origin_city should be string not expected: ${typeof origin_city}`
      );
    if (typeof discount !== "number")
      throw new TypeError(
        `type of discount should be number not expected: ${typeof discount}`
      );
    if (typeof image !== "string")
      throw new TypeError(
        `type of image should be string not expected: ${typeof image}`
      );

    return {
      destination_city,
      origin_city,
      discount,
      image,
    };
  }
};
