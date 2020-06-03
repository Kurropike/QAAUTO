let rast = {}
module.exports = {
    before: browser => {
        rast = browser.page.rastSoundPageObject()
        rast
            .navigate()
    },
    after: browser => {
        browser
            .end()
    },
    'Getting to Sign in': browser => {
        rast
        .pause(2500)
        .click('@acceptButton')
        .waitForElementPresent('@accountButton')
        .pause(1000)
        .click('@accountButton')
        .pause(1000)
        .waitForElementPresent('@accountLogInButton')
        .click('@accountLogInButton')
        .pause(1000)
    

    },
    'Signing In': browser => {
        rast 
        // .waitForElementPresent('@login')
        // .click('@login')
        .waitForElementPresent('@username')
        .setValue('@username', '')
        .setValue('@password', '')
        .click('@submitButton')
        // .pause()
        

    

           
        


    },
    'Offers': browser => {
        rast
        .click('@offers')
        .waitForElementPresent('@addToCartOffersButton1')
        .click('@addToCartOffersButton1')
        .waitForElementVisible('@checkOutOffersButton1', 100000)
        .click('@addToCartOffersButton2')
        .waitForElementVisible('@checkOutOffersButton2', 100000)
        .click('@addToCartOffersButton3')
        .waitForElementVisible('@checkOutOffersButton3', 100000)
        .click('@addToCartOffersButton4')
        .waitForElementVisible('@checkOutOffersButton4', 100000)
        .click('@addToCartOffersButton5')
        .waitForElementVisible('@checkOutOffersButton5', 100000)
        .click('@addToCartOffersButton6')
        .waitForElementVisible('@checkOutOffersButton6', 100000)
        .pause(1000)

        
        // .waitForElementPresent('@checkOutOffersButton1', 100000)
        // .waitForElementPresent('@checkOutOffersButton2', 100000)
        // .waitForElementPresent('@checkOutOffersButton3', 100000)
        // .waitForElementPresent('@checkOutOffersButton4', 100000)
        // .waitForElementPresent('@checkOutOffersButton5', 100000)
        // .waitForElementPresent('@checkOutOffersButton6', 100000)
        // .waitForElementPresent('@checkOutOffersButton7', 100000)
        // .waitForElementPresent('@checkOutOffersButton8', 100000)
        // .waitForElementPresent('@checkOutOffersButton9', 100000)
        




     
        
    },
    'Selecting products and adding them to cart': browser => {
        rast 
        .waitForElementPresent('@product')
        .click('@product')
        .pause(1000)
        .waitForElementPresent('@productSubMenuItemCollections')
        .click('@productSubMenuItemCollections')
        .waitForElementPresent('@addToCartWorldVocalsCollection1')
        .click('@addToCartWorldVocalsCollection1')
        .waitForElementVisible('@checkOutWorldVocalsCollectionButton1', 100000)
        .click('@addToCartWorldVocalsCollection2')
        .waitForElementVisible('@checkOutWorldVocalsCollectionButton2', 100000)
        .click('@addToCartWorldVocalsCollection3')
        .waitForElementVisible('@checkOutWorldVocalsCollectionButton3', 100000)
        .click('@addToCartWorldVocalsCollection4')
        .waitForElementVisible('@checkOutWorldVocalsCollectionButton4', 100000)
        .click('@addToCartWorldVocalsCollection5')
        .waitForElementVisible('@checkOutWorldVocalsCollectionButton5', 100000)
        .click('@addToCartWorldVocalsCollection6')
        .waitForElementVisible('@checkOutWorldVocalsCollectionButton6', 100000)
        .pause(1000)

        // .waitForElementVisible('@checkOutWorldVocalsCollectionButton6', 100000)
        // .waitForElementVisible('@checkOutWorldVocalsCollectionButton5', 100000)
        // .waitForElementVisible('@checkOutWorldVocalsCollectionButton4', 100000)
        // .waitForElementVisible('@checkOutWorldVocalsCollectionButton3', 100000)
        // .waitForElementVisible('@checkOutWorldVocalsCollectionButton2', 100000)
        // .waitForElementVisible('@checkOutWorldVocalsCollectionButton1', 100000)
        


    
    
    },
    'going to cart and editing': browser => {
        rast
        .click('@cartButton')
        .click('@removeFromCartButton1')
        .waitForElementPresent('@removeFromCartButton1')
        .pause(2000)
        .click('@removeFromCartButton1')
        .waitForElementPresent('@removeFromCartButton1')
        .pause(2000)
        .click('@removeFromCartButton1')
        .waitForElementPresent('@removeFromCartButton1')

       
        
        .pause(2000)

    },
    'Logging Out': browser => {
        rast 
        .waitForElementPresent('@accountButton')
        .click('@accountButton')
        .click('@logOutButton')
        .pause()
    },
    // 'Signing Back In': browser => {
    //     rast 
    //     // .waitForElementPresent('@login')
    //     // .click('@login')
    //     .waitForElementPresent('@username')
    //     .setValue('@username', 'charlespullen2000@gmail.com')
    //     .setValue('@password', 'Damondiadema17')
    //     .click('@submitButton')
    //     .pause()
        

    

           
        


    // },
    

}   