let instagram = {}
var user = {
    name: "omopastor234",
    password: "123revolver"
}
var asianHashtag = [ 
    {search: '#アルコール'}, 
    {search: '#바'},
    {search: '#일상'} 
 ]
 var signInFunction = (instagramPage, userName, password) => {
    instagramPage
      .setValue('@username', [userName, instagramPage.api.Keys.ENTER])
      .setValue('@password', [password, instagramPage.api.Keys.ENTER])
      .click('@notificationButton')
      .pause(2000)
    }
    var searchHashtagFunction = (instagramPage, searchName) => {
        instagramPage
        .setValue('@searchBar', [searchName, instagramPage.api.Keys.ENTER])
        .pause(2000)
        .click("@firstUser")
        .pause(2000)    
    }
    var clickFirstUserFunction = (instagramPage) => {
        instagramPage
            .click('@firstXPathUserPhoto')
            .pause(2000)
            .click('@xpathLike')
            .pause(2000)
    }
    var likePost = (instagramPage) => {
        instagramPage
            //Click on second person and continue(loop)
            .click('@xpathNextUserButton')
            .pause(Math.random()*12000)
            .click('@xpathLike')
    }
    var followUser = (instagramPage) => {
        instagramPage
            .pause(Math.random()*90000)
            .click('@xpathfollowButton')
            .pause(7000)
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
    'Searching Instagram log in page': browser => {
        instagram
        .verify.visible("@instagramLogo")
        .verify.visible("@username")
        .verify.visible("@password")
        .verify.visible("@loginButton")
        .pause(1000) 
    },
    'log in to instagram': browser => {
        signInFunction(instagram, user.name, user.password)
     },
     'Search person': browser => {
         searchHashtagFunction(instagram, asianHashtag[0].search)
     },
     'Click first user and like': browser => {
         clickFirstUserFunction(instagram)
     },
     
     'Loop through next users and like/follow': browser => {
         for (let i = 0; i < 125; i++) {
        likePost(instagram)
         followUser(instagram)
         }
     },
}