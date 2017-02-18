import createDescriptionGenerator from "~/factories/createDescriptionGenerator";

describe("createDescriptionGenerator", () => {
  it("creates a generator from static json content", async () => {
    const generator = createDescriptionGenerator();
    expect(await generator.generateRandom()).toBeString();
  });
});
