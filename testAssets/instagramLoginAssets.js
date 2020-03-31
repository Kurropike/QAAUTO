var user = {
    name: "scharlie_pullen",
    password: "Scorpions17"  
}
module.exports = {
    'log in to instagram': browser => {
        var userName = user.name
        var password = user.password
        instagram 
        .setValue('@username', [userName, browser.Keys.ENTER])
        .setValue('@password', [password, browser.Keys.ENTER])
        .click('@notificationButton')
        .pause(2000)
       
    },
}