import parseContentCode from "~/utils/parseContentCode";

describe("parseContentCode", () => {
  it('converts content codes (format: "$type#amount) into options', () => {
    expect(parseContentCode("$topic#3")).toEqual({
      type: "topic",
      quantity: 3,
    });

    expect(parseContentCode("$anothertopic#5")).toEqual({
      type: "anothertopic",
      quantity: 5,
    });
  });

  it("throws if invalid", () => {
    expect(() => parseContentCode("topic#5")).toThrow(
      'invalid code: "topic#5"'
    );
    expect(() => parseContentCode("$topic#-5")).toThrow(
      'invalid code: "$topic#-5"'
    );
    expect(() => parseContentCode("$topic1#5")).toThrow(
      'invalid code: "$topic1#5"'
    );
    expect(() => parseContentCode("#topic$5")).toThrow(
      'invalid code: "#topic$5"'
    );
  });
});
