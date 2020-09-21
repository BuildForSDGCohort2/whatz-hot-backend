import extendSchema from "./extendSchema";
import BaseUser from "./utils/baseUser";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = extendSchema(BaseUser, {
  userProfileId: {
    type: Schema.Types.ObjectId,
    ref: "UserProfiles",
    required: true,
  },
});

const User = mongoose.model("Users", UserSchema);
export default User;
