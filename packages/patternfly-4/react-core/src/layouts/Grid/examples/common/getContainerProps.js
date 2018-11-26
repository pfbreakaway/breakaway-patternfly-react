import { StyleSheet, css } from '@breakaway/react-styles';
import { global_BorderColor as borderColor, global_BorderWidth_md as borderWidth } from '@breakaway/react-tokens';

const gridClass = '.pf-l-grid';
const gridItemClass = '.pf-l-grid__item';

const styles = StyleSheet.create({
  demoLayout: {
    [`& ${gridClass} > ${gridItemClass}`]: {
      minHeight: 75,
      padding: '1rem',
      borderWidth: borderWidth.var,
      borderStyle: 'dashed',
      borderColor: borderColor.var
    }
  }
});

export default () => ({ className: css(styles.demoLayout) });
