const { hashPassword, comparePassword } = require("../passwordUtils");

describe("Test hashPassword and comparePassword functions", () => {
  it("Comparing hashed password with original password should return true", async () => {
    const password = "somePassword";
    const hashedPassword = await hashPassword(password);
    const matched = await comparePassword(password, hashedPassword);

    expect(matched).toBe(true);
  });
});
