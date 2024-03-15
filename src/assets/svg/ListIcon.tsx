import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const ListIcon = (props: SvgProps) => (
  <Svg width={16} height={14} fill="none" {...props}>
    <Path
      fill="#110E47"
      fillRule="evenodd"
      d="M7 .75A.75.75 0 0 1 7.75 0h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7 .75Zm-7 6A.75.75 0 0 1 .75 6h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 6.75ZM.75 12a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H.75Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ListIcon;
