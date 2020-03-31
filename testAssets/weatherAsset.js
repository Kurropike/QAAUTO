let myFunction = require('../../testAssets/instaAssets')
let myArray = require('./weatherData')
module.exports = {
    beforeEach: browser => {
        browser
            .url('https://devmountain-qa.github.io/weatherman/build/index.html')
            .waitForElementPresent('body')
    },
    after: browser => {
        browser
            .end()
    },
    'My Test': browser => {
        myArray.forEach(bacon => {
            myFunction(browser, bacon)
        })
        myArray.forEach(function (eachThingInMyData) {
            myFunction(browser, eachThingInMyData)
        })
    }
}