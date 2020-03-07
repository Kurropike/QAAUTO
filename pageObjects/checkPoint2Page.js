module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
    searchBarXpath: {
        selector: '(//input[@class="inputLine"])[1]',
        locateStrategy: 'xpath'
    }, 
    evensRes: {
        selector: '(//span[@class="resultsBox"])[1]',
        locateStrategy: 'xpath'
    },
    oddsRes: {
        selector: '(//span[@class="resultsBox"])[2]',
        locateStrategy: 'xpath'
    },
    split: {
        selector: '(//button[@class="confirmationButton"])[1]',
        locateStrategy: 'xpath'

    },
    inputXpath: {
        selector: '(//input[@class="inputLine"])[2]',
        locateStrategy: 'xpath'
    }, 
    filter: {
        selector: '(//button[@class="confirmationButton"])[2]',
        locateStrategy: 'xpath'
    },
    filterRes: {
        selector: '//span[@class="resultsBox filterObjectRB"]',
        locateStrategy: 'xpath'
    },
    filterXpath: {
        selector: '(//input[@class="inputLine"])[3]',
        locateStrategy: 'xpath'
    },
    filter2: {
        selector: '(//button[@class="confirmationButton"])[3]',
        locateStrategy: 'xpath'
    },
    stringRes: {
        selector: '//span[@class="resultsBox filterStringRB"]',
        locateStrategy: 'xpath'
    },
    palinXpath: {
        selector: '(//input[@class="inputLine"])[4]',
        locateStrategy: 'xpath'
    }, 
    check: {
        selector: '(//button[@class="confirmationButton"])[4]',
        locateStrategy: 'xpath'
    },
    palinRes: {
        selector: '(//span[@class="resultsBox"])[3]',
        locateStrategy: 'xpath'
    },
    sum1: {
       selector: '(//input[@class="inputLine"])[5]',
       locateStrategy: 'xpath'
    },
    sum2: {
        selector: '(//input[@class="inputLine"])[6]',
        locateStrategy: 'xpath'
    },
    sumRes: {
        selector:'(//span[@class="resultsBox"])[4]',
        locateStrategy: 'xpath'
    },
    check2: {
        selector: '(//button[@class="confirmationButton"])[5]',
        locateStrategy: 'xpath'
    },



    




}
    
      
        
        
        
        
        
        
        
    
}