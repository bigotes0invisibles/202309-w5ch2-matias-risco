import strictEquals from "./equals";

describe("Given a strictEquals function", () => {
  describe("When it compare 1 and 1", () => {
    test("Then it should return true", () => {
      const valueA = 1;
      const valueB = 1;
      const expectResult = true;

      const strictEqualsResult = strictEquals(valueA, valueB);

      expect(strictEqualsResult).toBe(expectResult);
    });
  });

  describe("When it compare NaN and NaN", () => {
    test("Then it should return false", () => {
      const valueA = NaN;
      const valueB = NaN;
      const expectResult = false;

      const strictEqualsResult = strictEquals(valueA, valueB);

      expect(strictEqualsResult).toBe(expectResult);
    });
  });

  describe("When it compare 0 and -0", () => {
    test("Then it should return true", () => {
      const valueA = 0;
      const valueB = -0;
      const expectResult = true;

      const strictEqualsResult = strictEquals(valueA, valueB);

      expect(strictEqualsResult).toBe(expectResult);
    });
  });

  describe("When it compare -0 and 0", () => {
    test("Then it should return true", () => {
      const valueA = -0;
      const valueB = 0;
      const expectResult = true;

      const strictEqualsResult = strictEquals(valueA, valueB);

      expect(strictEqualsResult).toBe(expectResult);
    });
  });

  describe("When it compare 1 and '1'", () => {
    test("Then it should return false", () => {
      const valueA = 1;
      const valueB = "1";
      const expectResult = false;

      const strictEqualsResult = strictEquals(valueA, valueB);

      expect(strictEqualsResult).toBe(expectResult);
    });
  });

  describe("When it compare true and false", () => {
    test("Then it should return false", () => {
      const valueA = true;
      const valueB = false;
      const expectResult = false;

      const strictEqualsResult = strictEquals(valueA, valueB);

      expect(strictEqualsResult).toBe(expectResult);
    });
  });

  describe("When it compare false and false", () => {
    test("Then it should return true", () => {
      const valueA = false;
      const valueB = false;
      const expectResult = true;

      const strictEqualsResult = strictEquals(valueA, valueB);

      expect(strictEqualsResult).toBe(expectResult);
    });
  });

  describe("When it compare false and false", () => {
    test("Then it should return true", () => {
      const valueA = "Water";
      const valueB = "oil";
      const expectResult = false;

      const strictEqualsResult = strictEquals(valueA, valueB);

      expect(strictEqualsResult).toBe(expectResult);
    });
  });
});
