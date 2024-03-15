import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const HomeIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      stroke={props.stroke ?? '#464455'}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 20H7a2 2 0 0 1-2-2v-7.08A2 2 0 0 1 5.698 9.4l5-4.285a2 2 0 0 1 2.604 0l5 4.285A2 2 0 0 1 19 10.92V18a2 2 0 0 1-2 2h-2m-6 0v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6m-6 0h6"
    />
  </Svg>
);
export default HomeIcon;
