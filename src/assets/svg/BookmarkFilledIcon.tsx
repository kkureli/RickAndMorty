import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const BookmarkFilledIcon = (props: SvgProps) => (
  <Svg width={18} height={18} viewBox="0 0 30 30" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M18 0H4a4 4 0 0 0-4 4v22a4 4 0 0 0 4 4l7-7 7 7a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4"
    />
  </Svg>
);
export default BookmarkFilledIcon;
