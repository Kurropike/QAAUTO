let homeLoan = {}
var loanArr = [ 
    {loanType: '@typeOfLoan',
    loan: '@optionL1',
    propertyType: '@typeOfProperty',
    property: '@optionP1',
    nextButton: '@nextButton',
}, 
    {loanType: '@typeOfLoan',
    loan: '@optionL2',
    propertyType: '@typeOfProperty',
    property: '@optionP2',
    nextButton: '@nextButton',
}, 
    {loanType: '@typeOfLoan',
    loan: '@optionL3',
    propertyType: '@typeOfProperty',
    property: '@optionP3',
    nextButton: '@nextButton',
}, 
    
    {loanType: '@typeOfProperty',
    loan: '@optionP4',
    propertyType: '@typeOfProperty',
    property: '@townHomeOption',
    nextButton: '@nextButton',
}, 
    

 ]
var buttons = [
    { primaryHome: '@primaryHomeButton',
    yesButton: '@yesButton',
    yesButton: '@yesButton',
    }
]

 


 var verifySecondPageFunction = (browser, loanObject) => {
     browser
     .verify.visible(loanObject.loanType)
     .click(loanObject.loanType)
     .verify.visible(loanObject.loan)
     .click(loanObject.loan)
     .verify.visible(loanObject.propertyType)
     .click(loanObject.propertyType)
     .verify.visible(loanObject.property)
     .click(loanObject.property)
 }




module.exports = {
    before: browser => {
        homeLoan = browser.page.homeLoanPage()
        homeLoan
            .navigate()
    }, 
    after: browser => {
        browser
            .end()
    }, 
    'verify Log In page is present': browser => {
        homeLoan
        .verify.visible('@getStarted')
        .click('@getStarted')
        .pause(1000)
        
    },
    
    // 'Property and loan' : browser => {
    //     browser
    //    verifySecondPage(homeLoan)   
    // },
    

    'loop through and select loans' : browser => {

        loanArr.forEach(monkey=> {
            verifySecondPageFunction(homeLoan, monkey)
        })
        homeLoan 
        .click(loanArr[0].nextButton)
        .pause(1000)



    }, 
    'entering city name': browser => {
        homeLoan
        .setValue('@xpathInput', 'Provo')
        .click('@nextButton')
        .pause()



    }
    

    
}