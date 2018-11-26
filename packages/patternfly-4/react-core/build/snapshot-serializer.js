const fs = require('fs');
const { createSerializer } = require('@breakaway/react-styles/snapshot-serializer');

const pf4CSS = fs.readFileSync(require.resolve('@patternfly/patternfly-next/patternfly-base.css'), 'utf8');

module.exports = createSerializer({
  globalCSS: pf4CSS.match(/:root\W?\{(.|\n)*?\}/)[0]
});
