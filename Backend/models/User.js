class User {
  constructor(
    name,
    user_name,
    terms_and_conditions,
    creation_date = new Date()
  ) {
    if (typeof name !== "string")
      throw new TypeError(
        `type of name should be string not expected: ${typeof name}`
      );

    if (typeof user_name !== "string")
      throw new TypeError(
        `type of email should be string not expected: ${typeof user_name}`
      );

    if (typeof terms_and_conditions !== "boolean")
      throw new TypeError(
        `type of terms_and_conditions should be boolean not expected: ${typeof terms_and_conditions}`
      );

    this.name = name;
    this.user_name = user_name;
    this.terms_and_conditions = terms_and_conditions;
    this.creation_date = creation_date;

    return {
      name,
      user_name,
      terms_and_conditions,
      creation_date,
    };
  }
}

module.exports = User;
