const CustomError = require("../utils/customError");
export const paginateOptionsMW = (req, res, next) => {
  let paginateOptions = {};

  // Check if its a GET request.
  if (req.method === "GET") {
    const { limit, sort, page } = req.query;

    // Set record limit, if available.
    paginateOptions.limit = limit
      ? parseInt(limit, 10)
      : process.env.MAX_ITEMS_PER_PAGE;

    // Set skip to next page, if available.
    paginateOptions.skip = (page - 1) * limit;

    // Set page option,if available.
    paginateOptions.page = page ? parseInt(page, 10) : 1;

    //set sort if available
    paginateOptions.sort = sort ? { createdAt: sort } : { createdAt: "asc" };
  }

  req.paginateOptions = paginateOptions;

  next();
};

export const queryLimitMW = (req, res, next) => {
  //get max items per page
  const maxLimit = process.env.MAX_ITEMS_PER_PAGE || 50;

  //check if GET request
  if (req.method === "GET") {
    //check if req.limit is set
    if (req.query.limit) {
      if (parseInt(req.query.limit, 10) > maxLimit) {
        req.query.limit = maxLimit.toString();
        return next(
          new CustomError(
            422,
            `Invalid limit specified. Max limit is ${maxLimit}`
          )
        );
      }
    }
  }
  next();
};
