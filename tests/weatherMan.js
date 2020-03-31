let weatherman = {}
module.exports = {
    beforeEach: browser =>{
        weatherman = browser.page.weathermanPage(),
        weatherman.navigate()
},
    afterEach: browser => {
        weatherman.end()
    },
    'weatherman search': browser => {
        var pepperoni
        pepperoni = function  (myData){
    }
        var myData = [
            {search: '84601', result: 'Provo'}, 
            {search: 'San Francisco', result: 'San Francisco'},
            {search: 'London', result: 'London'}] zzzzzz
        weatherman
        .setValue('input[type="text"]', myData[0].search)
        .click('button[class="enter-location__submit"]')
        .verify.containsText('h3[class="current-weather__location"]', myData[0].result)
        
         },