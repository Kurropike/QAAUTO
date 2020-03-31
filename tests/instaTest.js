let instagram = {}
var likePhoto = (functionPage, userName, password) => {
    functionPage
    .setValue('@username', [userName, browser.Keys.ENTER])
    .setValue('@password', [password, browser.Keys.ENTER])
    .click('@notificationButton')
    .pause(2000)
   
}
module.exports = {
    before: browser => {
        instagram = browser.page.instagramPage()
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
        instagram
        likePhoto(instagram, 'scharlie_pullen', 'Scorpions17')





        // var userName = "scharlie_pullen"
        // var password = "Scorpions17"
        // instagram 
        // .setValue('@username', [userName, browser.Keys.ENTER])
        // .setValue('@password', [password, browser.Keys.ENTER])
        // .click('@notificationButton')
        // .pause(2000)
       
    },
    'Search person': browser => {
        var searchName = "#blacklove" 
        instagram
        .setValue('@searchBar', [searchName, browser.Keys.ENTER])
        .click("@firstUser")
        .pause(2000)
    },
    'Click first user and like': browser => {
        instagram
        .click('@firstXPathUserPhoto')
        .pause(Math.random()*12000)
        .click('@xpathLike')
        .pause(Math.random()*12000)
        .click('@followButton')
        .pause(Math.random()*12000)
    },


    // },
    // 'Loop through next users and like': browser => {
       
    //     for (let i = 0; i < 1000; i++) {
    //     instagram
    //     //Click on second person and continue(loop)
    //     .click('@firstXPathUserPhoto')
    //     .pause(Math.random()*10000)
    //     .click('@xpathLike')
    //     .pause(Math.random()*10000)
    //     .click('@followButton')
    //     // if(.verify.containsText('@followButton' !== 'Follow')) {
    //     //     return .click('@followButton')
    //     // } else {
    //     //     return null
    //     // }
    //     .pause(Math.random()*10000)
        
    //     }

        
    // },
    'Loop through next users and like': browser => {
       
        for (let i = 0; i < 1000; i++) {
        instagram
        //Click on second person and continue(loop)
        .click('@xpathNextUserButton')
        .pause(Math.random()*10000)
        .click('@xpathLike')
        .pause(Math.random()*10000)
        .click('@followButton')
        .pause(Math.random()*10000)
        }
    },
  
    
}