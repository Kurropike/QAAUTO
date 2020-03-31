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
       var pineapple = (searchTerm) => {
           google
                .setValue('@searchBar', [searchTerm, browser.Keys.ENTER])
                .waitForElementVisible('@results')
                .verify.containsText('@results', searchTerm)
                .clearValue('@searchBar')

       }
    //    pineapple('CookieMonster')
    //    pineapple('Transformers')
       pineapple('bo')
       pineapple('bo')
       pineapple('bo')
      
       


          

    }
}