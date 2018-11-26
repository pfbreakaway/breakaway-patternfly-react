import { StyleSheet } from '@breakaway/react-styles';
import {
  global_spacer_md as spacerMd,
  global_BorderWidth_sm as borderWidth,
  global_BorderColor_dark as borderColor
} from '@breakaway/react-tokens';

export default StyleSheet.create({
  example: {
    padding: spacerMd.var,
    border: `${borderWidth.var} solid ${borderColor.var}`
  }
});
