import { validationResult } from "express-validator";
import CustomError from "../../utils/errors/customError";

const validationMW = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const errorsArray = [];
  errors.array().map((error) => errorsArray.push({ [error.param]: error.msg }));

  // console.log(errorsArray);
  return next(
    new CustomError(
      422,
      "Validation error(s): Check the following fields",
      errorsArray
    )
  );
};

export default validationMW;
