import jwt from "jsonwebtoken";

const TOKEN_SECRET = "noteApp";

export const createToken = (username, id) => {
  const token = jwt.sign(
    {
      username: username,
      id: id,
    },
    TOKEN_SECRET
  );

  return token;
};

export const decodeToken = (token) => {
  const decode = jwt.decode(token);
  return decode.id;
};
