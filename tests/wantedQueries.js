let wanted = {}
module.exports = {
    before: browser => {
        wanted = browser.page.wantedQueriesPage()
        wanted
            .navigate()
    },
    after: browser=> {
        browser.end()
    },
    'Check the home page': browser => {
        var enterName = 'Michael Scott'
        var enterPhone = '8013349873'
        
        wanted
            .verify.containsText('.titleBar', 'Wanted Queries')
            
            // .verify.containsText('.welcomeScreen', 'Welcome to "Wanted Queries."')
            .verify.containsText('@welcomeScreen', 'Enter Wanted')
            // .verify.containsText('welcomeScreen', 'Modify Wanted')
            // .verify.containsText('welcomeScreen', 'Cancel Wanted')
    },
    'Wanted Queries Page': browser => {
        wanted
        .setValue('@nameField')
    }
}