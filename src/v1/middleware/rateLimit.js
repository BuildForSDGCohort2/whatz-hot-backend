const RateLimit = require("express-rate-limit");

const rateLimiter = new RateLimit({
  windowMs: 60 * 1000, //max requests in 1 min.
  max: () => {
    return process.env.MAX_REQUESTS_PER_MIN;
  },
  message: {
    status: 429,
    error: "Too many requests per minute. Reduce your request rates",
  },
});

module.exports = rateLimiter;
