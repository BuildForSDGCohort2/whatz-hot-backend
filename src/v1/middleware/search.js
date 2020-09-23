export const searchParamsMW = (req, res, next) => {
  let searchParams = {};

  // Check if its a GET request.
  if (req.method === "GET") {
    const { latlon, cityid, maxdistance, isopen } = req.query;

    // set location property if provided
    searchParams.location = latlon
      ? { lat: latlon.split(",")[0], lon: latlon.split(",")[1] }
      : undefined;

    // set cityId
    searchParams.cityId = cityid;

    // maximum distance to search ** (max default will be set in .ENV)
    searchParams.maxDistance = maxdistance
      ? parseInt(maxdistance, 10) > 50
        ? 50
        : parseInt(maxdistance, 10)
      : 50; // default to max if distance is not provided

    //set isopen is set then convert to boolean
    if (isopen) {
      if (isopen.toLowerCase() === "false") {
        searchParams.isOpen = false;
      } else if (isopen.toLowerCase() === "true") {
        searchParams.isOpen = true;
      }
    }
  }

  // attach searchParams to request object
  req.searchParams = searchParams;

  next();
};
