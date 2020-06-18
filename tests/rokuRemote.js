let roku = {}
module.exports = {
    before: browser => {
        roku = browser.page.rokuRemoteObject()
        roku
            .navigate()
    },
    after: browser => {
        browser
            .end()
    },

    'Get Set up for chaos': browser => {
       roku 
       .waitForElementVisible('@skipForNow')
       .click('@skipForNow')
       .setValue('@deviceIpHost', "192.168.1.11")
       .waitForElementVisible('@deviceName')
       .setValue('@deviceName', "55R6+")
       .waitForElementVisible('@deviceModel')
       .setValue('@deviceModel', "7000X")
       .click('@addButton')
       .pause(5000)
    },

    'Chaos': browser => {
         for (let i = 0; i < 10000; i++) {
        roku
        // .click('@settingsButton')
        // .setValue('@inputText', "Isn't it weird that you can't see your own eyes?")
        // .clearValue('@inputText')
        // .click('@downButton')
        // .click('@upButton')
        .click('@downButton')
        .click('@rightButton')
        .click('@upButton')
        .click('@leftButton')
        // .click('@okButton')
       
        
        






        // This types "help me" Make sure to start on the 'a' key of screen. 
            // .click('@downButton')
            // .click('@rightButton')
            // .click('@okButton')
            // .click('@rightButton')
            // .click('@rightButton')
            // .click('@rightButton')
            // .click('@upButton')
            // .click('@okButton')
            // .click('@rightButton')
            // .click('@downButton')
            // .click('@okButton')
            // .click('@downButton')
            // .click('@leftButton')
            // .click('@leftButton')
            // .click('@okButton')
            // .click('@leftButton')
            // .click('@leftButton')
            // .click('@leftButton')
            // .click('@upButton')
            // .click('@upButton')
            // .click('@downButton')
            // .click('@downButton')
            // .click('@okButton')
            // .click('@rightButton')
            // .click('@rightButton')
            // .click('@rightButton')
            // .click('@rightButton')
            // .click('@upButton')
            // .click('@upButton')
            // .click('@okButton')
            // .click('@leftButton')
            // .click('@leftButton')
            // .click('@leftButton')
            // .click('@leftButton')
            



       
        

        }
    }


}
