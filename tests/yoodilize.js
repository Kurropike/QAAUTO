let yood = {}
module.exports = {
    beforeEach: browser => {
        yood = browser.page.yoodilizePage()
        yood
        .navigate()
    },
    after: browser => {
        browser
            .end()
    },
    'Test 1': browser => {
        var searchTerm = 'Recreational Vehicles'
        yood
        .click('@seeAllXpath')
        .verify.containsText('@seeAllXpath2', searchTerm)
        .click('@bluebuttonXpath')
    },
    'Test 2': browser => {
        var searchTerm = 'Outdoor Gear'
        yood
        .click('@seeAllXpath3')
        .verify.containsText('@seeAllXpath2', searchTerm)
        .click('@bluebuttonXpath')
        .pause(1000)
    },
    'Test 3': browser => {
        var searchTerm = 'Electronics'
        yood
        .click('@seeAllXpath4')
        .verify.containsText('@seeAllXpath2', searchTerm)
        .click('@bluebuttonXpath')
        .pause(1000)
    },
    'Test 4': browser => {
        var searchTerm = 'Party & Wedding Equipment'
        yood
        .click('@seeAllXpath5')
        .verify.containsText('@seeAllXpath2', searchTerm)
        .click('@bluebuttonXpath')
        .pause(1000)
    },
    'Test 5': browser => {
        var searchTerm = 'Tools'
        yood
        .click('@seeAllXpath6')
        .verify.containsText('@seeAllXpath2', searchTerm)
        .click('@bluebuttonXpath')
        .pause(1000)
    },


}
