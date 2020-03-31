let instagram = {}
module.exports = {
    before: browser => {
        instagram = browser.page.instagramUnfollowPage()
        instagram
            .navigate()
    }, 
    after: browser => {
        browser
            .end()
    }, 
    'Searching Instagram log in': browser => {
        instagram
        .verify.visible("@instagramLogo")
        .verify.visible("@username")
        .verify.visible("@password")
        .verify.visible("@loginButton")
        .pause(1000)
        
    },
    'log in to instagram': browser => {
        var userName = "scharlie_pullen"
        var password = ""
        instagram 
        .setValue('@username', [userName, browser.Keys.ENTER])
        .setValue('@password', [password, browser.Keys.ENTER])
        .click('@notificationButton')
        .pause(2000)
       
    },
    'getting to unfollow' : browser => {
        instagram    
        .click('@profilePicButton')
        .pause(1000)
        // .click('@mainFollowingButton')
        .pause(1000)


    },
    'unfollowing followed' : browser => {
        for (let i = 0; i < 270; i++) {
        instagram
        .click('@mainFollowingButton')
        .pause(1000)
        .click('@trueFollowingButton')
        .pause(1000)
        .click('@unfollowNotif')
        .pause(1000)
        .click('@xButton')
        .pause(1000)
        }
        

    }
    
    
}