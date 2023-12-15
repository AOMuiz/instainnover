import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";

const ReelsIcon = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M15.278 14.327a.546.546 0 0 1 0 .93l-5.46 3.254c-.346.206-.78-.052-.78-.465v-6.508c0-.414.434-.672.78-.465l5.46 3.254Z"
    />
    <Path stroke="#fff" strokeWidth={1.8} d="m6.038 2 4 6M13.039 2l4 6" />
    <Rect
      width={20.2}
      height={20.2}
      x={1.938}
      y={1.9}
      stroke="#fff"
      strokeWidth={1.8}
      rx={5.1}
    />
    <Path stroke="#fff" strokeWidth={1.8} d="M2.038 8h20" />
  </Svg>
);
export default ReelsIcon;
