import { css, StyleSheet } from '@breakaway/react-styles';

const styles = StyleSheet.create({
  demoLayout: {
    '& > *': {
      margin: '0.5rem'
    }
  }
});

export default () => ({ className: css(styles.demoLayout) });
