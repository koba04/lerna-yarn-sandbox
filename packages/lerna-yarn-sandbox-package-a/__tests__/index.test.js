'use strict';

const lernaYarnSandboxPackageA = require('../lib');

describe('@koba04/lerna-yarn-sandbox-package-a', () => {
    it('should return a', () => {
      expect(lernaYarnSandboxPackageA()).toBe('a');
    });
});
