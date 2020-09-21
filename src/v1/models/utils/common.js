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
