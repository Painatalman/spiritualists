import RandomSpiritualist from '~/components/Spiritualist/Random';
import { useState } from 'react';

const SpiritualistRandomizer = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <RandomSpiritualist key={counter} />
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Ver outro especialista
      </button>
    </>
  );
};

export default SpiritualistRandomizer;
