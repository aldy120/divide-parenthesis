var findBreakingPoint = require('./findBreakingPoint')
var assert = require('assert')

describe('test findBreakingPoint', function() {
  it('()', function () {
    assert.equal(1, findBreakingPoint('()'))
  })
  it('(((', function() {
    assert.equal(0, findBreakingPoint('((('))
  })
  it('()(', function() {
    assert.equal(1, findBreakingPoint('()('))
  })
  it('))))', function() {
    assert.equal(4, findBreakingPoint('))))'))
  })
})