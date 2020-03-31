let instagram = {}

//random Hashtag
var myData = [ 
    {hashtag1: '#歌舞伎町'},
    {hashtag2: '#'},
    {hashtag3: '#e90'}, 
    {hashtag4: '#歌舞伎町'}
 ]
 var user = {
    name: "scharlie_",
    password: ""  
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
        var userName = user.name
        var password = user.password
        instagram 
        .setValue('@username', [userName, browser.Keys.ENTER])
        .setValue('@password', [password, browser.Keys.ENTER])
        .click('@notificationButton')
        .pause(500)
       
    },
    
    'Search person': browser => {
       // var searchName = myData[0].hashtag1
        var searchName = myData[1].hashtag2

        instagram
        .setValue('@searchBar', [searchName, browser.Keys.ENTER])
        .click("@firstUser")
        .pause(500)
    },
    'Click first user and like': browser => {
        instagram
        .click('@firstXPathUserPhoto')
        .pause(Math.random()*10000)
        .click('@xpathLike')
        .pause(Math.random()*10000)
        .click('@followButton')
        .pause(Math.random()*10000)
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
       
        for (let i = 0; i < 500; i++) {
        instagram
        //Click on second person and continue(loop)
        .click('@xpathNextUserButton')
        .pause(Math.random()*12000)
        .click('@xpathLike')
        .pause(Math.random()*12000)
        .click('@followButton')
        .pause(1000)
        .pause(Math.random()*12000)
        }
    },
  
    
}