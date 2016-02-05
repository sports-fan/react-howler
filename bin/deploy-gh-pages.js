'use strict'

const ghpages = require('gh-pages')
const path = require('path')

console.log('Start deployment process.')

console.log('Clean up temp folder')
ghpages.clean()

console.log('Deploy with github token')
ghpages.publish(path.join(__dirname, '../examples/react/dist'), {
  repo: 'https://' + process.env.GH_TOKEN + '@github.com/thangngoc89/react-howler.git',
  silent: true
}, callback)

var callback = function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Finish')
}
