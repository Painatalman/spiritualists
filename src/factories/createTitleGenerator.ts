import TitleGenerator from '~/generators/TitleGenerator';
import data from '~/data/titles.json';

function createGenerator() {
  return new TitleGenerator(data);
}

export default createGenerator;
