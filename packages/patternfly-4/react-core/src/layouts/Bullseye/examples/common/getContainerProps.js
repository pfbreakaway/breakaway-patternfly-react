import { StyleSheet, css } from '@breakaway/react-styles';
import { global_BorderColor as borderColor, global_BorderWidth_md as borderWidth } from '@breakaway/react-tokens';

const bullseyeClass = '.pf-l-bullseye';

const styles = StyleSheet.create({
  demoLayout: {
    [`& ${bullseyeClass}`]: {
      height: 250,
      borderWidth: borderWidth.var,
      borderStyle: 'dashed',
      borderColor: borderColor.var
    },
    [`& ${bullseyeClass} > div`]: {
      borderWidth: borderWidth.var,
      borderStyle: 'dashed',
      borderColor: borderColor.var
    }
  }
});

export default () => ({ className: css(styles.demoLayout) });
