var http = require('http')
var rs = require('run-service')

module.exports = function hookTest (hook) {
  return http.createServer(function server (req, res) {
    req.resource = {}
    req.resource.params = {
      'foo': 'bar'
    }
    req.hook = {}
    req.hook.env = {}

    rs({
      service: hook,
      env: {
        params: 'testing',
        req: req,
        res: res
      },
      vm: {
        require: require,
        console: console
      }
    })(function (err) {
      if (err) throw err
    })
  })
}
