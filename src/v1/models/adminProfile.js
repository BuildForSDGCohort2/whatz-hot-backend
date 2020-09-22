import addressSchema from "./utils/common";

const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const adminProfileSchema = new Schema({
  adminId: {
    type: Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  address: addressSchema,
});

adminProfileSchema.plugin(mongoosePaginate);
const adminProfile = mongoose.model("AdminProfile", adminProfileSchema);

export default adminProfile;
