import { addressSchema } from "./utils/common";

const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const merchantProfileSchema = new Schema({
  merchantId: {
    type: Schema.Types.ObjectId,
    ref: "Merchant",
    required: true,
    unique: true,
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

merchantProfileSchema.plugin(mongoosePaginate);
const merchantProfile = mongoose.model(
  "MerchantProfile",
  merchantProfileSchema
);

export default merchantProfile;
