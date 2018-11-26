const babelENV = process.env.BABEL_ENV || 'development';
const modules = babelENV !== 'production:esm' ? 'commonjs' : false;

module.exports = {
  presets: [['env', { modules }], 'react'],
  plugins: [
    'transform-class-properties',
    'transform-export-extensions',
    'transform-object-rest-spread',
    'transform-object-assign',
    babelENV !== 'development' && [
      'transform-imports',
      {
        '@breakaway/react-icons': {
          kebabCase: true,
          preventFullImport: true,
          transform: importName => {
            if (importName.toLowerCase() === 'icon') {
              throw new Error('Icon import is not allowed');
            }
            const importPath = `icons/${importName}`;
            if (!modules) {
              return `@breakaway/react-icons/dist/esm/${importPath}`;
            }
            return `@breakaway/react-icons/dist/js/${importPath}`;
          }
        }
      }
    ]
  ].filter(Boolean),
  ignore: (() => {
    const ignore = ['src/**/__snapshots__'];
    if (babelENV.includes('production')) {
      ignore.push('test.js', '__mocks__');
    }
    return ignore;
  })()
};
