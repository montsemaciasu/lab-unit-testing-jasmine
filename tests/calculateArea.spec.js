// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return the result of calculate area the two numbers", () => {
      expect(calculateArea(1, 2)).toEqual(2);
      expect(calculateArea(4, 4)).toEqual(16);
      expect(calculateArea(100, 5)).toEqual(500);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });

    it("should return undefined if any of the arguments is not number ", () => {
      expect(calculateArea("1", 2)).toEqual(undefined);
      expect(calculateArea(2, "bon")).toEqual(undefined);
      expect(calculateArea("3", 2)).toEqual(undefined);
    });
  });
});
