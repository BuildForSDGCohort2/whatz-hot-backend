const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;

const BaseUserSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    fbId: {
      type: String,
      required: true,
      minlength: 28,
    },
    email: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add soft delete plugin
BaseUserSchema.plugin(mongooseDelete, {
  overrideMethods: true,
  deletedAt: true,
  deletedBy: true,
});

// add soft delete capabilities
BaseUserSchema.plugin(mongoosePaginate);

const BaseUser = mongoose.model("BaseUser", BaseUserSchema);
export default BaseUser;
