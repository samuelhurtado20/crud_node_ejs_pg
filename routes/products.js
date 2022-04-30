const express = require('express')
const EnumMessages = require('../EnumMessages')
const router = express.Router()

const productsModel = require('../models/products')

router.get('/', function (req, res, next) {
  productsModel
    .get()
    .then((products) => {
      res.render('products/show', { products: products })
    })
    .catch((err) => {
      console.log(err)
      return res.status(500).send(EnumMessages.ErrorGettingProduct)
    })
})

router.get('/add', function (req, res, next) {
  res.render('products/add')
})

router.post('/add', function (req, res, next) {
  const { name, price } = req.body
  if (!name || !price) {
    return res.status(500).send(EnumMessages.InvalidInformation)
  }

  productsModel
    .add(name, price)
    .then((idproductInsertado) => {
      res.redirect('/products')
    })
    .catch((err) => {
      return res.status(500).send(EnumMessages.ErrorAddingProduct)
    })
})

router.get('/remove/:id', function (req, res, next) {
  productsModel
    .remove(req.params.id)
    .then(() => {
      res.redirect('/products')
    })
    .catch((err) => {
      return res.status(500).send(EnumMessages.ErrorDeletingProduct)
    })
})

router.get('/edit/:id', function (req, res, next) {
  productsModel
    .getById(req.params.id)
    .then((product) => {
      if (product) {
        res.render('products/edit', {
          product: product
        })
      } else {
        return res.status(500).send(EnumMessages.ProductNotFound)
      }
    })
    .catch((err) => {
      return res.status(500).send(EnumMessages.ErrorGettingProduct)
    })
})

router.post('/edit/', function (req, res, next) {
  const { id, name, price } = req.body
  if (!name || !price || !id) {
    return res.status(500).send(EnumMessages.InvalidInformation)
  }

  productsModel
    .update(id, name, price)
    .then(() => {
      res.redirect('/products')
    })
    .catch((err) => {
      return res.status(500).send(EnumMessages.ErrorUpdatingProduct)
    })
})

module.exports = router
