'use strict'

class TickerController {
  index (req, res, next) {
    res.render('ticker')
  }
}

module.exports = TickerController
