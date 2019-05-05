const { parse } = require('url')
//NOTE you cannot mix import and module.exports!
const Blah = require('./someImport')
module.exports = (req, res) => {
  const { query } = parse(req.url, true)
  console.log('query', query)
  console.log('Blah', Blah)
  //   console.log('query', new Blah())
  const { name = 'World' } = query
  res.end(`Hello ${name}!`)
}
