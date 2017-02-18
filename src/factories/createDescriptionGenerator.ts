import templates from "~/data/description/templates.json";
import {
  CONTENT_TYPE_DESCRIPTION_TOPIC,
  CONTENT_TYPE_DESCRIPTION_SERVICE,
  CONTENT_TYPE_DESCRIPTION_RESULT,
  CONTENT_TYPE_DESCRIPTION_TECHNIQUE,
} from "~/constants/contentTypes";
import topicData from "~/data/description/topics.json";
import resultData from "~/data/description/results.json";
import serviceData from "~/data/description/services.json";
import techniqueData from "~/data/description/techniques.json";
import DescriptionGenerator from "~/generators/DescriptionGenerator";
import ContentGenerator from "~/generators/ContentGenerator";

function createDescriptionGenerator(): DescriptionGenerator {
  const contentGenerator: ContentGenerator = new ContentGenerator([
    {
      type: CONTENT_TYPE_DESCRIPTION_TOPIC,
      content: topicData,
    },
    {
      type: CONTENT_TYPE_DESCRIPTION_SERVICE,
      content: serviceData,
    },
    {
      type: CONTENT_TYPE_DESCRIPTION_RESULT,
      content: resultData,
    },
    {
      type: CONTENT_TYPE_DESCRIPTION_TECHNIQUE,
      content: techniqueData,
    },
  ]);
  return new DescriptionGenerator({
    templates: templates,
    contentGenerator,
  });
}

export default createDescriptionGenerator;
