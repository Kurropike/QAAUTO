let gmail = {}
module.exports = {
    before: browser => {
        gmail = browser.page.gmailPage()
        gmail
            .navigate()
    }, 
    after: browser => {
        browser
            .end()
    }, 
    'signIn': browser => {
        var signInInput = "kurropike@gmail.com"
        var password = "Damondiadema17"
        gmail
        .setValue('@signInEmailOrPhone', [signInInput, browser.Keys.ENTER])
        .pause(5000)
        gmail
        .setValue('@passwordInput', [password, browser.Keys.ENTER])
        .pause()

    }

   
}