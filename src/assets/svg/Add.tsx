import * as React from 'react';
import Svg, { SvgProps, Mask, Path, G } from 'react-native-svg';

const SvgAdd = (props: SvgProps) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G stroke="#72a8bc" strokeWidth={2} fill="none">
      <Path d="M12.25 1.84822L12.25 22" />
      <Path
        transform="rotate(90 12.25 11.804)"
        d="M12.25 1.84822L12.25 22"
      />
    </G>
  </Svg>
);

export default SvgAdd;
