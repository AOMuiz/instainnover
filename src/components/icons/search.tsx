import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

const SearchIcon = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Circle
      cx={10.596}
      cy={9.615}
      r={7.788}
      stroke="#fff"
      strokeWidth={1.731}
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.731}
      d="m22.135 21.154-5.77-5.77"
    />
  </Svg>
);
export default SearchIcon;
