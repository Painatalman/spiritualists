import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Animated: React.FC = ({ children }) => {
  const [flip, set] = useState(false);
  const style = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    leave: { opacity: 0, color: 'hotpink' },
    reset: true,
    reverse: flip,
    delay: 3000,
  });

  return <animated.div style={style}>{children}</animated.div>;
};

export default Animated;
