const jwt = require("jsonwebtoken");
const CustomError = require("../errors/customError");
const mongoose = require("mongoose");
require("dotenv").config();

// dummy placeholders for models to pass linting
let User, Merchant, Admin;

// token generator
const generateToken = (payload, secret, duration = "30d") => {
  const secretPhrase = Buffer.from(secret, "base64");
  const token = jwt.sign(payload, secretPhrase, {
    expiresIn: process.env.TOKEN_DURATION || duration,
    algorithm: "HS256",
  });

  return token;
};

// appToken generator
const getUserToken = async (userId) => {
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new CustomError(400, "Invalid UserID");
  }

  // confirm user exists
  const user = await User.findById(userId);
  if (!user) {
    throw new CustomError(400, "Invalid UserID");
  }

  //TO-DO: maybe confirm that user exists on firebase as well ??

  return generateToken({ userId }, process.env.USER_SECRET);
};

// orgToken generator
const getMerchantToken = async (merchantId) => {
  if (!mongoose.Types.ObjectId.isValid(merchantId)) {
    throw new CustomError(400, "Invalid merchantID");
  }
  // confirm merchant exists
  const merchant = await Merchant.findById(merchantId);
  if (!merchant) {
    throw new CustomError(400, "Invalid merchantID");
  }

  return generateToken({ merchantId }, process.env.MERCHANT_SECRET);
};

// sysToken generator
const getAdminToken = async (adminId) => {
  if (!mongoose.Types.ObjectId.isValid(adminId)) {
    throw new CustomError(400, "Invalid adminID");
  }

  // confirm adminId exists
  const admin = await Admin.findById(adminId);
  if (!admin) {
    throw new CustomError(
      401,
      "You are not authorized to access this resource"
    );
  }

  return generateToken(
    {
      adminId,
      role: admin.role,
    },
    process.env.ADMIN_SECRET
  );
};

module.exports = {
  generateToken,
  getUserToken,
  getMerchantToken,
  getAdminToken,
};
