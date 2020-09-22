export const addressSchema = {
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  street: {
    type: String,
  },
};

export const imagesSchema = {
  featuredImage: {
    type: String,
    required: true,
  },
  otherImages: [
    {
      url: {
        type: String,
        required: true,
      },
      dateCreated: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
};

export const timeSchema = {
  hour: {
    type: Number,
    default: 0,
    min: 0,
    max: 23,
  },
  minute: {
    type: Number,
    default: 0,
    min: 0,
    max: 59,
  },
};

export const daysArray = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
