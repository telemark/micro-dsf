'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { json, send } = require('micro')
const dsfLookup = require('node-dsf')
const config = require('./config')
const logger = require('./lib/logger')
const validateJwt = require('./lib/validate-jwt')

module.exports = async (req, response) => {
  const { query } = await parse(req.url, true)
  const data = ['POST', 'PUT'].includes(req.method) ? await json(req) : query

  if (['POST'].includes(req.method)) {
    const jwt = req.headers.authorization
    const decoded = await validateJwt({ jwt: jwt, tokenKey: config.JWT_SECRET })

    if (decoded) {
      logger('info', ['Validated jwt'])

      const options = {
        method: data.method,
        config: config.DSF,
        query: data.query
      }
      logger('info', ['method', data.method])
      try {
        const resp = await dsfLookup(options)
        logger('info', [data.method, 'response', resp, 'success'])
        send(response, 200, resp)
      } catch (error) {
        logger('error', [data.method, JSON.stringify(error, null, 2)])
        send(response, 500, JSON.stringify(error, null, 2))
      }
    }
  } else {
    response.setHeader('Content-Type', 'text/html')
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
