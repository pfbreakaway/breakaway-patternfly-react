import { BackgroundImage, BackgroundImageSrc } from '@breakaway/react-core';
import SimpleBackgroundImage from './examples/SimpleBackgroundImage';

export default {
  title: 'Background Image',
  components: {
    BackgroundImage
  },
  enumValues: {
    'Object.values(BackgroundImageSrc)': Object.values(BackgroundImageSrc)
  },
  examples: [{ component: SimpleBackgroundImage, title: 'Simple Background Image' }],
  fullPageOnly: true
};
