import { LoginPage, LoginForm } from '@breakaway/react-core';
import SimpleLoginPage from './examples/SimpleLoginPage';

export default {
  title: 'LoginPage',
  components: {
    LoginPage,
    LoginForm
  },
  examples: [{ component: SimpleLoginPage, title: 'Simple LoginPage' }],
  fullPageOnly: true
};
