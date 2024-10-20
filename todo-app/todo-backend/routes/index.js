const express = require('express')
const redis = require('../redis')
const router = express.Router()

const configs = require('../util/config')
console.log({ configs })
let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits,
  })
})

router.get('/statistics', async (req, res) => {
  res.send({ added_todos: await redis.getAsync('added_todos') })
})

module.exports = router
