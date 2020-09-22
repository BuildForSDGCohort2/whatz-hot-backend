import extendSchema from "./utils/extendSchema";
import BaseUser from "./utils/baseUser";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MerchantSchema = extendSchema(BaseUser, {
  merchantProfileId: {
    type: Schema.Types.ObjectId,
    ref: "MerchantProfile",
    required: true,
    unique: true,
  },
});

const Merchant = mongoose.model("Merchant", MerchantSchema);
export default Merchant;
