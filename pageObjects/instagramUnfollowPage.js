module.exports = {
    url: 'https://www.instagram.com/',
    elements: {
        instagramLogo: 'h1[class="NXVPg Szr5J  coreSpriteLoggedOutWordmark"]',
        username: 'input[name="username"]',
        password: 'input[name="password"]',
        loginButton: 'button[type="submit"]',
        searchBar: 'input[placeholder="Search"]',
        notificationButton: 'button[class="aOOlW  bIiDR  "]',
        firstUser: 'div[class="z556c"]',
        firstXPathUserPhoto: {
              selector: '(//div[@class="_9AhH0"])[1]',
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
        commentButton: 'button[class="sqdOP yWX7d    y3zKF     "]',
        xpathFirstUser: {
            selector: '(//div[@class="RR-M-  TKzGu "])[1]',
            locateStrategy: 'xpath'
        },
        xpathNextUserButton: {
            selector: '//a[@class=" _65Bje  coreSpriteRightPaginationArrow"]',
            locateStrategy: 'xpath'
        },
        followButton: {
            selector: '//button[@class="oW_lN sqdOP yWX7d    y3zKF     "]',
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
            selector: '(//button[@class="sqdOP  L3NKy    _8A5w5    "])[1]',
            locateStrategy: 'xpath'

                
        },
        unfollowNotif: {
            selector: '//button[@class="aOOlW -Cab_   "]',
            locateStrategy: 'xpath'
        },
        xButton: {
            selector: '(//button[@class="wpO6b "])[2]',
            locateStrategy: 'xpath'
        }



    }

}