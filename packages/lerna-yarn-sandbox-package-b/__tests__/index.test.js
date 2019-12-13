'use strict';

const lernaYarnSandboxPackageB = require('../lib');

describe('@koba04/lerna-yarn-sandbox-package-b', () => {
    it('should return b', () => {
      expect(lernaYarnSandboxPackageB()).toBe('b');
    });
});
