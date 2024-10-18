var express = require('express')
var router = express.Router()
const { TheCatAPI } = require('@thatapicompany/thecatapi')

const theCatApi = new TheCatAPI(process.env.CAT_API_KEY)

/* GET home page. */
router.get('/random', async function (req, res) {
  const image = await theCatApi.images.getRandomImage()
  res.status(200).send(image)
})

module.exports = router
