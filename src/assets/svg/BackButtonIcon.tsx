import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const BackButtonIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#fff"
      d="M19.307 11.302H6.365l3.088-3.111a.701.701 0 0 0 0-.987.689.689 0 0 0-.98 0l-4.27 4.303a.701.701 0 0 0 0 .986l4.27 4.303a.688.688 0 0 0 .98 0 .701.701 0 0 0 0-.987l-3.088-3.111h12.942A.695.695 0 0 0 20 12a.695.695 0 0 0-.693-.698Z"
    />
  </Svg>
);
export default BackButtonIcon;
