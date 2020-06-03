let instagram = {}
let signInFunc = require('../testAssets/instagramLogin')
let hashTagFunc = require('../testAssets/instagramSearchHashtag')
let tapFirstUserFunc = require('../testAssets/tapFirstUserFunc')
let likePostFunc = require('../testAssets/likePost')
let followUserFunc = require('../testAssets/followUser')
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
'log in to instagram': browser => {
signInFunc(instagram)
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
},
'Search person': browser => {
hashTagFunc(instagram)
},
'Click first user and like': browser => {
tapFirstUserFunc(instagram)
},
'Loop through next users and like/follow': browser => {
for (let i = 0; i < 175; i++) {
likePostFunc(instagram)
//followUserFunc(instagram)
}
},
}
3:02
module.exports = {
url: 'https://www.instagram.com/',
elements: {
instagramLogo: 'h1[class="NXVPg Szr5J coreSpriteLoggedOutWordmark"]',
username: 'input[name="username"]',
password: 'input[name="password"]',
loginButton: 'button[type="submit"]',
searchBar: 'input[placeholder="Search"]',
notificationButton: 'button[class="aOOlW bIiDR "]',
firstUser: 'div[class="z556c"]',
firstXPathUserPhoto: {
selector: '(//div[@class="_9AhH0"])[12]',
locateStrategy: 'xpath'
},
xpathLike: {
selector: '//span[@class="fr66n"]',
locateStrategy: 'xpath'
},
xpathComment: {
selector: '//form[@aria-label="Add a comment…"]',
locateStrategy: 'xpath'
},
commentButton: 'button[class="sqdOP yWX7d y3zKF "]',
xpathFirstUser: {
selector: '(//div[@class="RR-M- TKzGu "])[1]',
locateStrategy: 'xpath'
},
xpathNextUserButton: {
selector: '//a[@class=" _65Bje coreSpriteRightPaginationArrow"]',
locateStrategy: 'xpath'
},
xpathfollowButton: {
selector: '//button[@class="oW_lN sqdOP yWX7d y3zKF "]',
locateStrategy: 'xpath'
},
profilePicButton: {
selector: '//div[@class="_0v2O4"]',
//selector: '(//a[@class="_2dbep qNELH kIKUG"])[3]',
locateStrategy: 'xpath'
},
mainFollowingButton: {
selector: '(//li[@class="Y8-fY "])[3]',
locateStrategy: 'xpath'
},
trueFollowingButton: {
selector: '(//button[@class="sqdOP L3NKy _8A5w5 "])[1]',
locateStrategy: 'xpath'
},
unfollowNotif: {
selector: '//button[@class="aOOlW -Cab_ "]',
locateStrategy: 'xpath'
},
xButton: {
selector: '(//button[@class="wpO6b "])[2]',
locateStrategy: 'xpath'
}
}
}