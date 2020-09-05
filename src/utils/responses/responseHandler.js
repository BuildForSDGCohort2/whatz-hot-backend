module.exports = (res, status, message = "", data = []) => {
  res.status(status).json({
    data,
    status: "success",
    message,
  });
};
