var serverTest = require('servertest')
var testHook = require('./')
var test = require('tape')

var exampleHook = function exampleHook (hook) {
  hook.res.end('Success!')
}

var service = testHook(exampleHook)

test('simple test', function (assert) {
  serverTest(service, '/', { encoding: 'utf8' }, function (err, res) {
    assert.ifError(err, 'no error')
    assert.equal(res.statusCode, 200, 'correct statusCode')
    assert.equal(res.body, 'Success!', 'correct body content')
    assert.end()
  })
})
