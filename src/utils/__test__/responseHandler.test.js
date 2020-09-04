import responseHandler from "../responses/responseHandler";
import express from "express";
import request from "supertest";

const app = express();
app.get("/", (req, res) => {
  return responseHandler(res, 200, ["some data"], "Some optional message");
});

describe("Unit test responseHandler", () => {
  it("should return formatted response", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(1);
    expect(response.body.message).toBe("Some optional message");
  });
});
