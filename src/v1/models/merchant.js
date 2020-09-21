import extendSchema from "./extendSchema";
import BaseUser from "./utils/baseUser";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MerchantSchema = extendSchema(BaseUser, {
  userProfileId: {
    type: Schema.Types.ObjectId,
    ref: "MerchantProfiles",
    required: true,
  },
});

const Merchant = mongoose.model("Merchants", MerchantSchema);
export default Merchant;
