const test = require('tape')
const hasOnlykeys = require('../index.js')
const testObj = {
  a: 1,
  b: 2
}

test('hasOnlykeys(obj, keys)', t => {
  t.plan(3)
  t.ok(hasOnlykeys(testObj, 'a b'))
  t.ok(hasOnlykeys(testObj, ['a', 'b']))
  t.notOk(hasOnlykeys(testObj, 'a b c'))
})
