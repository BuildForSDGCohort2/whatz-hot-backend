import pointSchema from "./utils/geoJSON";
import { addressSchema, imagesSchema } from "./utils/common";

const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;

const BusinessSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    coordinates: pointSchema,
    address: {
      addressSchema,
      required: true,
    },
    images: {
      type: imagesSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add soft delete plugin
BusinessSchema.plugin(mongooseDelete, {
  overrideMethods: true,
  deletedAt: true,
  deletedBy: true,
});

// add soft delete capabilities
BusinessSchema.plugin(mongoosePaginate);

const Business = mongoose.model("Businesses", BusinessSchema);
export default Business;
