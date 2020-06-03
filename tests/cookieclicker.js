let cookie = {}
module.exports = {
    before: browser => {
        cookie = browser.page.cookieObjects()
        cookie
            .navigate()
    },
    after: browser => {
        browser
            .end()
    },
    'click on cookie': browser => {
        for (let i = 0; i < 10000; i++) {
        cookie
        .click('@cookieButton')
        
        }
    }
}