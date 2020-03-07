let check = {}
module.exports = {
   beforeEach: browser => {
       check = browser.page.checkPoint2Page()
       check
            .navigate()
    
    }, 
   after: browser => {
    browser
        .end()
    },
    'Odds and Evens 1 ' : browser => {
        var searchTerm = '22'
        check
        .setValue('@searchBarXpath', searchTerm)
        .click('@split')
        .verify.containsText('@evensRes', searchTerm)
        .pause(1000)


    },
    'Odds and Evens 2' : browser => {
        var searchTerm = '25'
        check
        .setValue('@searchBarXpath', searchTerm)
        .click('@split')
        .verify.containsText('@oddsRes', searchTerm)
        .pause(1000)

    },
    'Odds and Evens String ' : browser => {
        var string = '1,2,3,4,5,6'
        var even = '2,4,6'
        var odd = '1,3,5'
        check
        .setValue('@searchBarXpath', string)
        .click('@split')
        .verify.containsText('@evensRes', even)
        .verify.containsText('@oddsRes', odd)
        .pause(1000)


    },
    'Filter Object' : browser => {
        var searchTerm = 'age'
        check
        .setValue('@inputXpath', searchTerm)
        .click('@filter')
        .verify.containsText('@filterRes', searchTerm)
        .pause(1000)
    },
    'FilterString' : browser => {
        var name = 'James'
        check 
        .setValue('@filterXpath', name)
        .click('@filter2')
        .verify.containsText('@stringRes', name)
        .pause(1000)
    },
    'palindrome' : browser => {
        var mum = 'joj'
        var te = 'true'
        check 
        .setValue('@palinXpath', mum)
        .click('@check')
        .verify.containsText('@palinRes', te)
        .pause(1000)
    },
    'sum': browser => {
        var num1 = '2'
        var num2 = '3'
        var sum = '5'
        check 
        .setValue('@sum1', num1)
        .setValue('@sum2', num2)
        .click('@check2')
        .verify.containsText('@sumRes', sum)
        .pause(1000)

    }





}