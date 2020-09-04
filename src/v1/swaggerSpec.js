import swaggerJSDoc from "swagger-jsdoc";

// Swagger definition
const swaggerDefinition = {
  info: {
    openapi: "3.0.21", // Version of swagger
    title: "WhatzHot Backend API", // Title of the documentation
    version: "1.0.0", // Version of the app
    description: "A review application for business and consumers", // short description of the app
    termsOfService: "https://whatz-hot.netlify.app/terms_of_service",
    contact: {
      name: "Whatz-Hot Contact",
      url: "https://whatz-hot.netlify.app/contact_us",
      email: "whatz-hot",
    },
  },
  servers: [
    {
      url: "https://whatz-hot.herokuapp.com",
      description: "Staging server",
    },
    {
      url: "http://localhost:3000",
      description: "Local server",
    },
  ],
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ["src/v1/jsdocs/**/*.yaml"],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
