import extendSchema from "./utils/extendSchema";
import BaseUser from "./utils/baseUser";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = extendSchema(BaseUser, {
  adminProfileId: {
    type: Schema.Types.ObjectId,
    ref: "adminProfile",
    required: true,
    unique: true,
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;
