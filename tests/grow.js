let grow = {}
module.exports = {
    beforeEach: browser => {
       grow = browser.page.growObject()
       grow   
            .navigate()
    },
    after: browser => {
        browser
            .end()
    },
    'Grow metric data transfer to alternate dashboard': browser => {
        grow 
        //LOGIN CREDENTIALS ENTERED, ACTUAL INPUT MAY BE MISSING DUE TO CONFIDENTIALITY
        .setValue('@emailInput', ['charlespullen2000@gmail.com', browser.Keys.ENTER])
        .setValue('@passwordInput', ['Damondiadema17', browser.Keys.ENTER])
        .pause(200)
        //HOVERING OVER DATA METRIC 
        .moveToElement("@dataMetricRect", 1, 1)
        .pause(2000)
        //SELECTING OPTIONS, COPYING TO SECOND DASHBOARD
        .click('@dotButton')
        .pause(2000)
        .click('@menuCopyButton')
        .pause(2000)
        .click('@menuToggleDownBar')
        .pause(2000)
        .moveToElement('@menuSecondDashOption', 1, 1)
        .click('@menuSecondDashOption')
        .pause(2000)
        .click('@metricCopyOkButton')
        .pause(2000)
        //GOING BACK TO DASHBOARD
        .click('@dashboardBackArrowButton')
        .pause(2000)
        .click('@dashboardMenuSalesDash')
        //VERIFICATION OF DATA METRIC PRESENCE
        .waitForElementVisible('@salesDashDashboard')
        .pause()
    },

    //UNUSED IFRAME TRANSFERING FUNCTION (NOT NEEDED)
    // "Transferring to data metrics" : function (browser) {
    //     browser 
    //     .getAttribute('#1459307 > iframe', "id", result=>{
    //         browser
    //         .frame(result.value)
    //         console.log(result.value)
    //     })
    // }, 
}