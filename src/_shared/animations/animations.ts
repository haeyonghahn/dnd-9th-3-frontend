import { keyframes } from "styled-components";
import { colors } from "../colors";

const animations = {
  glowLight: keyframes`
    0%, 100% { background: ${colors.gray100} }
    50% { background: ${colors.gray25}  }
  `,
  glowDark: keyframes`
    0%, 100% { background: ${colors.gray700}}
    50% { background: ${colors.gray900}}
  `,
};

export default animations;
