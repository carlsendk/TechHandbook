const { getWikiUrl, getBlogUrl } = require('../src/urlHelpers.js');
const test = require('node:test');
const assert = require('node:assert/strict');

test('creates wiki URLs with base path', () => {
  assert.strictEqual(getWikiUrl('foo'), '/tech-leadership/wiki/foo/');
});

test('creates blog URLs with base path', () => {
  assert.strictEqual(getBlogUrl('bar'), '/tech-leadership/blog/bar/');
});
