module.exports = class Agency {
  constructor(
    name,
    description,
    phone_number,
    terms_and_conditions,
    creation_date = new Date()
  ) {
    if (typeof name !== "string")
      throw new TypeError(
        `type of name should be string not expected: ${typeof name}`
      );
    if (typeof description !== "string")
      throw new TypeError(
        `type of description should be string not expected: ${typeof description}`
      );
    if (typeof phone_number !== "string")
      throw new TypeError(
        `type of phone_number should be string not expected: ${typeof phone_number}`
      );
    if (typeof terms_and_conditions !== "boolean")
      throw new TypeError(
        `type of terms_and_conditions should be boolean not expected: ${typeof terms_and_conditions}`
      );

    this.name = name;
    this.description = description;
    this.phone_number = phone_number;
    this.terms_and_conditions = terms_and_conditions;
    this.creation_date = creation_date;

    return {
      name,
      description,
      phone_number,
      terms_and_conditions,
      creation_date,
    };
  }
};
