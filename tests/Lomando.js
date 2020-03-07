module.exports = {
    before: browser => {
        browser.url('https://www.lomando.com/elizabeth.html')
            .waitForElementPresent('body')
    },
    after: browser => {
        browser
            .end()
    },
    // 'Searching Lomando': browser => {
    //     browser 
    //     .click('img[src="tope.jpg"]')
    //     .click('img[src="tope.jpg"]')
    //     .waitForElementVisible('div[id="d1"]')
    //     .click('div#entdoor1')
    //     .click('div#entdoor2')
    //     .click('img[src="pimg/mirror.gif"]')
    //     .click('pimg/mainlink.jpg"]')
    //     .click('img#door')
    
        

    //     .pause(5000)
        

    // }
    'demo Test': function(browser) {
        // open a new window tab (default)
        browser.openNewWindow(function(result) {
          console.log(result);
        });
    
        // open a new window
        browser.openNewWindow('window', function(result) {
          console.log(result);
        });
      },
    
      'ES6 async demo Test': async function(browser) {
        const result = await browser.fullscreenWindow();
        console.log('result value is:', result.value);
      },
    'demo Test': function(browser) {
        // open a new window tab (default)
        browser.openNewWindow(function(result) {
          console.log(result);
        });
    
        // open a new window
        browser.openNewWindow('window', function(result) {
          console.log(result);
        });
      },
    
      'ES6 async demo Test': async function(browser) {
        const result = await browser.fullscreenWindow();
        console.log('result value is:', result.value);
      },
    'demo Test': function(browser) {
        // open a new window tab (default)
        browser.openNewWindow(function(result) {
          console.log(result);
        });
    
        // open a new window
        browser.openNewWindow('window', function(result) {
          console.log(result);
        });
      },
    
      'ES6 async demo Test': async function(browser) {
        const result = await browser.fullscreenWindow();
        console.log('result value is:', result.value);
      },
    'demo Test': function(browser) {
        // open a new window tab (default)
        browser.openNewWindow(function(result) {
          console.log(result);
        });
    
        // open a new window
        browser.openNewWindow('window', function(result) {
          console.log(result);
        });
      },
    
      'ES6 async demo Test': async function(browser) {
        const result = await browser.fullscreenWindow();
        console.log('result value is:', result.value);
      },
    'Searching Lomando': browser => {
        browser 
        .click('img#door')
        .click('img#eli6')
        .click('img#tv')
        .click('img#button1')
        .click('img#button2')
        .click('img#button3')
        .click('img#button4')
        .click('img#button5')
        .click('img#button6')
        .click('img#button7')
        .click('img#button8')
        .click('img#button9')
        .click('img#button10')
        .click('img#button11')
        .click('img#button12')
        .click('img#button13')
        .click('img#button14')
        .click('img#button15')
        .click('img#button16')
        .click('img#button17')
        .click('img#button18')
        .click('img#button19')
        .click('img#button20')
        .pause(10000)


        .pause(2000)
    }
    
}