import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const VideoSearchIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M1.002 4.882A4 4 0 0 1 5 1h2.524l2.588 3.882H7.034L4.469 1.035a3.972 3.972 0 0 0-1.153.336l2.341 3.51H1.002ZM1 5c0-.04 0-.079.002-.118H1V5Zm0 1.027V11a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V6.027H1ZM15 5v-.118h-.002A4 4 0 0 0 11 1H8.9l2.588 3.882h3.51L15 5Zm-4.938 4.48c.22.132.22.46 0 .592l-3.475 2.071c-.22.132-.496-.033-.496-.296V7.706c0-.263.276-.428.496-.296l3.475 2.07Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default VideoSearchIcon;
