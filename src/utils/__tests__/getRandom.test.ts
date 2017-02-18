import getRandom from "../getRandom";

describe("getRandom", () => {
  it("can get any item on the list", () => {
    jest
      .spyOn(Math, "random")
      .mockImplementationOnce(() => 0.01)
      .mockImplementationOnce(() => 0.45)
      .mockImplementationOnce(() => 0.74)
      .mockImplementationOnce(() => 0.99);

    const options: string[] = ["a", "b", "c", "d"];

    expect(getRandom(options)).toBe("a");
    expect(getRandom(options)).toBe("b");
    expect(getRandom(options)).toBe("c");
    expect(getRandom(options)).toBe("d");
  });

  it("throws with an empty list", () => {
    expect(() => getRandom([])).toThrow(
      "cannot get a random item from an empty list"
    );
  });
});
