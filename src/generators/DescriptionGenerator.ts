import ContentGenerator from '~/generators/ContentGenerator';
import getRandom from '~/utils/getRandom';
import IRandomGenerator from '~/interfaces/IRandomGenerator';
import parseContentCode from '~/utils/parseContentCode';

function getTemplateCodes(template: string): string[] {
  return [...template.matchAll(/\$[a-zA-Z]+\#\d+/g)].map(
    (matchData) => matchData[0]
  );
}

async function getUpdatedTemplate(
  template: string,
  codes: string[],
  contentGenerator: ContentGenerator
) {
  const contentPerCode = await Promise.all(
    codes.map(async (code) => {
      const contentOptions = parseContentCode(code);
      const randomContent = await contentGenerator.getRandom(contentOptions);
      return randomContent.join(', ');
    })
  );

  contentPerCode.forEach((content, index) => {
    const code = codes[index];
    template = template.replace(code, content);
  });
  return template;
}

function getUpdateTemplateWithName(template: string, name: string) {
  return template.replace(/\$_name/g, name.toUpperCase());
}

type Parameters = {
  templates: string[];
  contentGenerator?: ContentGenerator;
};

class DescriptionGenerator implements IRandomGenerator<string> {
  templates: string[];
  contentGenerator?: ContentGenerator;
  constructor({ templates, contentGenerator }: Parameters) {
    this.templates = templates;
    this.contentGenerator = contentGenerator;
  }
  async generateRandom(name = 'PROFESSOR BAMBO'): Promise<string> {
    let output = getRandom(this.templates);
    const { contentGenerator } = this;
    output = getUpdateTemplateWithName(output, name);

    if (!contentGenerator) return await output;

    const templateCodes: string[] = getTemplateCodes(output);
    output = await getUpdatedTemplate(output, templateCodes, contentGenerator);

    return await output;
  }
}

export default DescriptionGenerator;
