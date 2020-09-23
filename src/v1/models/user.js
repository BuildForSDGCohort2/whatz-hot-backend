import extendSchema from "./utils/extendSchema";
import BaseUser from "./utils/baseUser";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = extendSchema(BaseUser, {
  userProfileId: {
    type: Schema.Types.ObjectId,
    ref: "UserProfile",
    unique: true,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
