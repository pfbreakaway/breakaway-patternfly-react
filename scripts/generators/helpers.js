const REMOVE_NPM_SCOPE = 'removeNPMScope';

function setHelpers(plop) {
  plop.setHelper(REMOVE_NPM_SCOPE, text => text.replace(/^@breakaway\//i, ''));
}

module.exports = {
  REMOVE_NPM_SCOPE,
  setHelpers
};
