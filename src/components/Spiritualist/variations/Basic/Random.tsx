import useSpiritualistData from '~/hooks/useSpiritualistData';
import Spiritualist from '~/components/Spiritualist/variations/Basic/template';
import { Error, Loading } from '~/components/Spiritualist/variations/Basic';

function RandomSpiritualist() {
  const [error, spiritualist] = useSpiritualistData();

  return spiritualist ? (
    <Spiritualist
      name={spiritualist.name}
      description={spiritualist.description}
    />
  ) : error ? (
    <Error />
  ) : (
    <Loading />
  );
}

export default RandomSpiritualist;
