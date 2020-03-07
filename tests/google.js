let google = {}
module.exports = {
    beforeEach: browser => {
       google = browser.page.googlePage()
       google   
            .navigate()
    },
    after: browser => {
        browser
            .end()
    },
    'Searching Google': browser => {
        var searchTerm = 'Cookie Monster'
        google
        .setValue('@searchBar', [searchTerm, browser.Keys.ENTER])
        .waitForElementPresent('@results')
        .verify.containsText('@results', searchTerm)
          

    }
}