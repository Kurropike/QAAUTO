module.exports = {
    beforeEach: browser => {
        browser.url('https://alpha.yoodlize.com/')
            // .waitForElementPresent('body')
    },
    after: browser => {
        browser.end()
    },
    'Test 1': browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Recreational Vehicles')
        .click('//img[@src="/images/logo/blueRaw.png"]')
    },
    'Test 2': browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Outdoor Gear')
        .click('//img[@src="/images/logo/blueRaw.png"]')
        .pause(1000)
    },
    'Test 3': browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Electronics')
        .click('//img[@src="/images/logo/blueRaw.png"]')
        .pause(1000)
    },
    'Test 4': browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Party & Wedding Equipment')
        .click('//img[@src="/images/logo/blueRaw.png"]')
        .pause(1000)
    },
    'Test 5': browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[5]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Tools')
        .click('//img[@src="/images/logo/blueRaw.png"]')
        .pause(1000)
    },

}