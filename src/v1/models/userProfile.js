import { addressSchema } from "./utils/common";

const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  address: {
    type: addressSchema,
    required: true,
  },
});

userProfileSchema.plugin(mongoosePaginate);
const userProfile = mongoose.model("UserProfile", userProfileSchema);

export default userProfile;
