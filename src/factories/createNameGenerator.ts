import NameGenerator from '~/generators/NameGenerator';
import nameData from '~/data/names.json';

function createNameGenerator() {
  return new NameGenerator(nameData);
}

export default createNameGenerator;
