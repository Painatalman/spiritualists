import createNameGenerator from "~/factories/createNameGenerator";

describe("createNameGenerator", () => {
  it("creates a generator from static json content", async () => {
    const generator = createNameGenerator();
    expect(await generator.generateRandom()).toBeString();
  });
});
