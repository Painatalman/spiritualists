import useSpiritualistData from '~/hooks/useSpiritualistData';
import Spiritualist from '~/components/Spiritualist';
import ErrorSpiritualist from '~/components/Spiritualist/Error';
import LoadingSpiritualist from '~/components/Spiritualist/Loading';

function RandomSpiritualist() {
  const [error, spiritualist] = useSpiritualistData();

  return spiritualist ? (
    <Spiritualist
      name={spiritualist.name}
      description={spiritualist.description}
    />
  ) : error ? (
    <ErrorSpiritualist />
  ) : (
    <LoadingSpiritualist />
  );
}

export default RandomSpiritualist;
