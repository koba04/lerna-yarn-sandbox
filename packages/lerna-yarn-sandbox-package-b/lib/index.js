'use strict';

const lernaYarnSandboxPackageA = require('@koba04/lerna-yarn-sandbox-package-a');
console.log(lernaYarnSandboxPackageA());

module.exports = lernaYarnSandboxPackageB;

function lernaYarnSandboxPackageB() {
  return 'b' + ':' + lernaYarnSandboxPackageA();
}
