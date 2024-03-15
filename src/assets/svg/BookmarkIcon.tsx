import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const BookmarkIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.fill ?? '#000'}
      fillRule="evenodd"
      d="M18.213 4.095c.24.092.432.236.574.434.142.197.213.416.213.656v13.63c0 .24-.071.459-.213.656a1.226 1.226 0 0 1-.574.434 1.27 1.27 0 0 1-.482.084c-.35 0-.652-.113-.908-.338L12 15.167l-4.823 4.484a1.33 1.33 0 0 1-1.39.254 1.227 1.227 0 0 1-.574-.434A1.097 1.097 0 0 1 5 18.816V5.184c0-.24.071-.458.213-.655.142-.198.334-.342.575-.434C5.94 4.032 6.1 4 6.268 4h11.463c.168 0 .328.032.482.095Zm-5.24 10.1 4.627 4.293V5.354H6.4v13.134l4.627-4.294.973-.899.973.9Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default BookmarkIcon;
