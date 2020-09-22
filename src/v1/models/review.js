const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

import { pointSchema } from "./utils/geoJSON";
import { imagesSchema } from "./utils/common";

const ReviewSchema = new Schema(
  {
    businessId: {
      type: Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    checkin: {
      location: {
        type: pointSchema,
        required: true,
      },
      images: {
        type: imagesSchema,
        required: true,
      },
    },
    comment: {
      type: String,
      required: true,
    },
    upVotes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Users",
        unique: true,
      },
    ],
    downVotes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Users",
        unique: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

ReviewSchema.plugin(mongoosePaginate);

const Review = mongoose.model("Review", ReviewSchema);
export default Review;
