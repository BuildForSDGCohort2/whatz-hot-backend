import extendSchema from "./extendSchema";
import BaseUser from "./utils/baseUser";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = extendSchema(BaseUser, {
  adminProfileId: {
    type: Schema.Types.ObjectId,
    ref: "adminProfiles",
    required: true,
  },
});

const Admin = mongoose.model("Admins", AdminSchema);
export default Admin;
