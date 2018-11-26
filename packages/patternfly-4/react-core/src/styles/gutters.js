import { getModifier } from '@breakaway/react-styles';

export const GutterSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

export function getGutterModifier(styleObj, size, defaultValue) {
  return getModifier(styleObj, `gutter-${size}`, defaultValue);
}
