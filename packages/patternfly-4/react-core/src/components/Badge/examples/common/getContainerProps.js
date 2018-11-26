import { css, StyleSheet } from '@breakaway/react-styles';

const styles = StyleSheet.create({
  demoLayout: {
    backgroundColor: '#fff',
    '& > span': {
      margin: '0.5rem'
    }
  }
});

export default () => ({ className: css(styles.demoLayout) });
