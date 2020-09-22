import pointSchema from "./utils/geoJSON";
import {
  addressSchema,
  imagesSchema,
  timeSchema,
  daysArray,
} from "./utils/common";

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
    merchantId: {
      // business owner
      type: mongoose.Types.ObjectId,
      ref: "Merchant",
      required: true,
      unique: true,
    },
    coordinates: pointSchema,
    address: {
      // manually entered address
      addressSchema,
      required: true,
    },
    reverseLookupAddress: {
      // we get this from reverse geocoding
      addressSchema,
      required: false,
    },
    images: {
      type: imagesSchema,
      required: true,
    },
    openHours: [
      {
        openingTime: {
          type: timeSchema,
        },
        closingTime: {
          type: timeSchema,
        },
        daysOfWeek: [
          {
            type: String,
            enum: daysArray,
          },
        ],
      },
    ],
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

const Business = mongoose.model("Business", BusinessSchema);
export default Business;
