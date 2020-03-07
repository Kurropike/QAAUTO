let apple = {}
module.exports = {
    beforeEach: browser => {
       apple = browser.page.applePage()
       apple   
            .navigate()
    },
    after: browser => {
        browser
            .end()
    },
    'Searching Apple': apple  => {
        var searchTerm = 'Cookie Monster'
        apple
        .click('input#ac-gn-searchform-input')
        .setValue('@searchBar', [searchTerm, browser.Keys.ENTER])
        .waitForElementPresent('@results')
        .verify.containsText('@results', searchTerm)
          

    }
}