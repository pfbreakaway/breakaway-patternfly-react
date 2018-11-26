import { css, StyleSheet } from '@breakaway/react-styles';

const styles = StyleSheet.create({
  demoLayout: {
    backgroundColor: '#fff'
  }
});

export default () => ({ className: css(styles.demoLayout) });
