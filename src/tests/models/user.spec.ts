import UserShop from "../../models/userShop";

const user = new UserShop();

describe("All user methods is defined", () => {
  it("index method", () => {
    expect(user.index).toBeDefined();
  });
  it("create method", () => {
    expect(user.create).toBeDefined();
  });
  it("show method", () => {
    expect(user.show).toBeDefined();
  });
});

describe("ensure that every methods in user work as expected", () => {
  it("1. index all users", () => {
    async () => {
      const result = await user.index();
      expect(result).toEqual([]);
    };
  });
  it("2. Create new user and ensure that it return token", () => {
    async () => {
      const result = await user.create("Mohamed", "Ezzat", "moezzat123");
      expect(result.token).toBeDefined;
    };
  });
  it("3. show user by id", () => {
    async () => {
      const index = await user.show("1");
      expect(index[0].firstName).toEqual("Mohamed");
      expect(index[0].lastName).toEqual("ezzat");
      expect(index[0].id).toEqual(1);
      expect(index[0].password).not.toEqual("moezzat123");
    };
  });
});
