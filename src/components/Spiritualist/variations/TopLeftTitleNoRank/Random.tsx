import useSpiritualistDataWithExtras from './useSpiritualistDataWithExtras';
import Spiritualist from './template';
import { Error, Loading } from '~/components/Spiritualist/variations/Basic';

function RandomSpiritualist() {
  const [error, spiritualistData] = useSpiritualistDataWithExtras();

  return spiritualistData ? (
    <Spiritualist
      name={spiritualistData.name}
      description={spiritualistData.description}
      titleTop={spiritualistData.titles[0]}
      titleBottomLeft={spiritualistData.titles[1]}
      titleBottomRight={spiritualistData.titles[2]}
    />
  ) : error ? (
    <Error />
  ) : (
    <Loading />
  );
}

export default RandomSpiritualist;
