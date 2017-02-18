import ContentGenerator from "~/generators/ContentGenerator";
import DescriptionGenerator from "~/generators/DescriptionGenerator";

describe("DescriptionGenerator", () => {
  it("generates without data when a template doesn't require it", async () => {
    const basicTemplateWithoutVariables =
      "Dotado de conhecimentos e poderes, ajuda a resolver problemas em menos de 3 dias, difíceis ou graves, com eficácia e garantia.";
    const generator = new DescriptionGenerator({
      templates: [basicTemplateWithoutVariables],
    });
    expect(await generator.generateRandom()).toEqual(
      basicTemplateWithoutVariables
    );
  });

  describe("description with content variables", () => {
    it("generates with one variable", async () => {
      const template =
        "Dotado de conhecimentos e poderes, ajuda a resolver problemas em menos de 3 dias, difíceis ou graves, com eficácia e garantia. Como: $topic#5, com rapidez e garantia total.";
      const contentGenerator = new ContentGenerator([
        {
          type: "topic",
          content: [
            "Amor",
            "Negócios",
            "Depressão",
            "Justiça",
            "Afastar e Aproximar pessoas amadas",
          ],
        },
      ]);
      jest
        .spyOn(contentGenerator, "getRandom")
        .mockImplementationOnce(async () =>
          Promise.resolve([
            "Amor",
            "Negócios",
            "Depressão",
            "Justiça",
            "Afastar e Aproximar Pessoas Amadas",
          ])
        );
      const generator = new DescriptionGenerator({
        templates: [template],
        contentGenerator,
      });
      expect(await generator.generateRandom()).toEqual(
        "Dotado de conhecimentos e poderes, ajuda a resolver problemas em menos de 3 dias, difíceis ou graves, com eficácia e garantia. Como: Amor, Negócios, Depressão, Justiça, Afastar e Aproximar Pessoas Amadas, com rapidez e garantia total."
      );
    });

    it("generates with many variables of one content type", async () => {
      const template =
        "Dotado de conhecimentos e poderes, ajuda a resolver problemas em menos de 3 dias, difíceis ou graves, com eficácia e garantia. Como: $topic#5, com rapidez e garantia total, $topic#4, etc...";
      const contentGenerator = new ContentGenerator([
        {
          type: "topic",
          content: [
            "Amor",
            "Negócios",
            "Depressão",
            "Justiça",
            "Afastar e Aproximar pessoas amadas",
            "impotência Sexual",
            "Vícios de Drogas",
            "Tabaco e Álcool",
            "Invejas",
          ],
        },
      ]);
      jest
        .spyOn(contentGenerator, "getRandom")
        .mockImplementationOnce(async () =>
          Promise.resolve([
            "Negócios",
            "Problemas de Afeto",
            "Injustiças",
            "Falta de Dólares",
            "Póneis injustos",
          ])
        )
        .mockImplementationOnce(async () =>
          Promise.resolve([
            "impotência Sexual",
            "Vícios de Drogas",
            "Tabaco e Álcool",
            "Invejas",
          ])
        );
      const generator = new DescriptionGenerator({
        templates: [template],
        contentGenerator,
      });
      expect(await generator.generateRandom()).toEqual(
        "Dotado de conhecimentos e poderes, ajuda a resolver problemas em menos de 3 dias, difíceis ou graves, com eficácia e garantia. Como: Negócios, Problemas de Afeto, Injustiças, Falta de Dólares, Póneis injustos, com rapidez e garantia total, impotência Sexual, Vícios de Drogas, Tabaco e Álcool, Invejas, etc..."
      );
    });

    it("generates with many content types", async () => {
      const template =
        "Dotado de conhecimentos e poderes, ajuda a resolver problemas em menos de 3 dias, difíceis ou graves, com eficácia e garantia. Como: $topic#5, com rapidez e garantia total, $technique#4, etc...";
      const contentGenerator = new ContentGenerator([
        {
          type: "topic",
          content: ["Test 1", "Test 2", "Test 3"],
        },
        {
          type: "technique",
          content: ["Skill 1", "Skill 2"],
        },
      ]);
      jest
        .spyOn(contentGenerator, "getRandom")
        .mockImplementationOnce(async () =>
          Promise.resolve(["Test 2", "Test 1", "Test 3"])
        )
        .mockImplementationOnce(async () =>
          Promise.resolve(["Skill 2", "Skill 1"])
        );
      const generator = new DescriptionGenerator({
        templates: [template],
        contentGenerator,
      });
      expect(await generator.generateRandom()).toEqual(
        "Dotado de conhecimentos e poderes, ajuda a resolver problemas em menos de 3 dias, difíceis ou graves, com eficácia e garantia. Como: Test 2, Test 1, Test 3, com rapidez e garantia total, Skill 2, Skill 1, etc..."
      );
    });

    describe("with spiritualist name", () => {
      it("generates with a single default name, capitalized", async () => {
        const template = "Dotado de conhecimentos e poderes, consulte o $_name";

        const generator = new DescriptionGenerator({
          templates: [template],
        });
        expect(await generator.generateRandom()).toEqual(
          "Dotado de conhecimentos e poderes, consulte o PROFESSOR BAMBO"
        );
      });

      it("generates with a multiple default name occurrences", async () => {
        const template = "O $_name é de confiança. Consulte o $_name";
        const generator = new DescriptionGenerator({
          templates: [template],
        });
        expect(await generator.generateRandom()).toEqual(
          "O PROFESSOR BAMBO é de confiança. Consulte o PROFESSOR BAMBO"
        );
      });

      it("generates with a custom name, capitalized", async () => {
        const template = "Consulte o $_name";

        const generator = new DescriptionGenerator({
          templates: [template],
        });
        expect(await generator.generateRandom("Mestre Iziaca")).toEqual(
          "Consulte o MESTRE IZIACA"
        );
      });
    });
  });
});
