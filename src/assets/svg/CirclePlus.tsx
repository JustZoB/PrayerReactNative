import * as React from 'react';
import Svg, { SvgProps, Circle, Mask, Path, G, Ellipse } from 'react-native-svg';

const SvgCirclePlus = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    {...props}>
    <Ellipse
      ry={16}
      rx={16}
      cy={16}
      cx={16}
      fill="#bfb393"
    />
    <Path
      stroke="#fff"
      fill="none"
      d="M16 6.5303L16 26.42311"
      strokeWidth={1.5}
    />
    <Path
      transform="rotate(-90 16 16)"
      stroke="#fff"
      fill="none"
      strokeWidth={1.5}
      d="M16 6.5303L16 26.42311"
    />
  </Svg>
);

export default SvgCirclePlus;
