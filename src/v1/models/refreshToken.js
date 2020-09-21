const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RefreshTokenSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    token: {
      type: String,
      required: true,
    },
    fbId: {
      type: String,
      required: true,
      minlength: 28,
    },
    expiryDate: {
      type: Date,
      default: new Date().getDate + 30, //default exipration of 30 days
    },
  },
  {
    timestamps: true,
  }
);

const RefreshToken = mongoose.model("RefreshTokens", RefreshTokenSchema);
export default RefreshToken;
