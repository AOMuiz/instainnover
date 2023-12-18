import * as React from "react";
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg";

const ImageSearchIcon = (props: SvgProps) => (
  <Svg width={48} height={48} fill="none" {...props}>
    <G filter="url(#a)">
      <Path
        fill="#fff"
        d="M25.695 29.265h-6.677a3.343 3.343 0 0 1-3.338-3.339V19.25a3.342 3.342 0 0 1 3.338-3.339h6.677a3.342 3.342 0 0 1 3.34 3.339v6.677a3.343 3.343 0 0 1-3.34 3.339Zm6.01-.668v-8.68a.668.668 0 1 0-1.335 0v8.68a2.003 2.003 0 0 1-2.004 2.003h-8.68a.668.668 0 0 0 0 1.336h8.68a3.343 3.343 0 0 0 3.34-3.339Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default ImageSearchIcon;
