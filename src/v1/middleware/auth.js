const jwtMW = require("express-jwt");
require("dotenv").config();

exports.userAuthMW = jwtMW({
  secret: Buffer.from(process.env.USER_SECRET, "base64"),
  requestProperty: "token",
  algorithms: ["HS256"],
});

exports.merchantAuthMW = jwtMW({
  secret: Buffer.from(process.env.MERCHANT_SECRET, "base64"),
  requestProperty: "token",
  algorithms: ["HS256"],
});

exports.adminAuthMW = jwtMW({
  secret: Buffer.from(process.env.ADMIN_SECRET, "base64"),
  requestProperty: "token",
  algorithms: ["HS256"],
});
