import ProductShop from "../../models/productShop";
const product = new ProductShop();

describe("Product functions is defined", function (): void {
  it("Index function is defined", function (): void {
    expect(product.index).toBeDefined();
  });

  it("show function is defined", function (): void {
    expect(product.show).toBeDefined();
  });

  it("Create function is defined", function (): void {
    expect(product.create).toBeDefined();
  });

  it("showByCategory function is defined", function (): void {
    expect(product.showByCategory).toBeDefined();
  });
  it("Delete function is defined", function (): void {
    expect(product.delete).toBeDefined();
  });
});

describe("Test that every function work as expected", () => {
  it("1. index all products", () => {
    async () => {
      const index = await product.index();
      expect(index).toEqual([
        {
          id: 1,
          name: "MacBook pro",
          price: 150,
          category: "electronics",
        },
      ]);
    };
  });

  it("2. Create new product", () => {
    async () => {
      const create = await product.create("MacBook pro", 150, "electronics");
      expect(create).toEqual({
        id: 1,
        name: "MacBook pro",
        price: 150,
        category: "electronics",
      });
    };
  });

  it("3. show product by id", () => {
    async () => {
      const show = await product.show("1");
      expect(show).toEqual({
        id: 1,
        name: "MacBook pro",
        category: "electronics",
        price: 150,
      });
    };
  });

  it("4. show all products in specific category", () => {
    async () => {
      const show = await product.showByCategory("electronics");
      expect(show).toEqual([
        {
          id: 1,
          name: "MacBook pro",
          category: "electronics",
          price: 150,
        },
      ]);
    };
  });

  it("5. Delete any product by using product id", () => {
    async () => {
      const show = await product.delete("1");
      expect(show).toEqual({
        id: 1,
        name: "MacBook pro",
        category: "electronics",
        price: 150,
      });
    };
  });
});
