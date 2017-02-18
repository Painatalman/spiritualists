import ContentGenerator from "~/generators/ContentGenerator";

describe("ContentGenerator", () => {
  it("provides the requested number of items of the specified topic", async () => {
    const content = ["apple", "batman", "c", "dangling commit"];
    const generator = new ContentGenerator([
      {
        type: "theme",
        content,
      },
    ]);

    expect(
      await generator.getRandom({
        type: "theme",
        quantity: 4,
      })
    ).toIncludeAllMembers(content);
  });
});
