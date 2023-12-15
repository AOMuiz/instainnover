import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
const AddIcon = (props: SvgProps) => (
  <Svg width={25} height={24} fill={props.fill || "none"} {...props}>
    <Rect
      width={20}
      height={20}
      x={2.019}
      y={2}
      stroke="#fff"
      strokeWidth={1.8}
      rx={5}
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.8}
      d="M12.119 6.9v10.2M6.919 11.8h10.2"
    />
  </Svg>
);
export default AddIcon;
