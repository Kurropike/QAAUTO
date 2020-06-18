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
       for (let i = 0; i < 100000; i++) {
           google
        pineapple('贅沢')
       }
    //    pineapple('CookieMonster')
    //    pineapple('Transformers')


      
       
       
      
       


          

    }, 

    
}