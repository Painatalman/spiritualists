import getUniqueRandomValues from "~/utils/getUniqueRandomValues";
describe("getUniqueRandomValues", () => {
  it("returns all items if quantity matches option length", () => {
    expect(getUniqueRandomValues(["a", "b", "c", "d"], 4)).toIncludeAllMembers([
      "a",
      "b",
      "c",
      "d",
    ]);
  });

  it("returns the requested number of elements, randomly", () => {
    jest
      .spyOn(Math, "random")
      .mockImplementationOnce(() => 0.01)
      .mockImplementationOnce(() => 0.5);

    expect(getUniqueRandomValues(["a", "b", "c", "d"], 2)).toIncludeSameMembers(
      ["a", "c"]
    );
  });
});
