let slack = {}
var user = {
    email: "",
    password: "",
    workspace: "devmtn"
}
module.exports = {
    before: browser => {
        slack = browser.page.slackBotPage()
        slack
            .navigate()
    },
    after: browser => {
        browser
            .end()
    },
    'Log in to Slack': browser => {
        slack
        //First Page
        //.pause(20000)
        //.click('@xpathSignIn')
        
      
        //Second page - slack company name
        .waitForElementPresent('@xpathSlackUrl', 1000000)
        .setValue('@xpathSlackUrl', [user.workspace, slack.api.Keys.ENTER])
        .pause(1000)
        // Third Page - email and password
        .setValue('@userNameTextField', user.email)
        .setValue('@passwordTextField', [user.password, slack.api.Keys.ENTER])
        // //We in
        // // .click('@xpathJon')
        // //.click('@searchBarButton')
        
        // //.setValue('@searchBar', [user.password, slack.api.Keys.ENTER])
        // .pause(7000)

    },
    'send a message' : browser => {
        for (let i = 0; i < 100000; i++) {
            var text = "SPAM"
        slack 
        .setValue('@message', [text, slack.api.Keys.ENTER])
      
        }
        
        
    }
    // 'click on Jon' : browser => {
    //     browser
    //     .click('@xpathJon')
    //     .pause()
    //     //.setValue('@inputName', "Jon")
    // }
}