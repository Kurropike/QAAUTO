module.exports = {
    url: ("http://localhost:3000"),
    elements: {
        welcomeScreen: 'div#welcomeScreen',
        titleBar: {
            selector: "//h1[@class='titleBar']",
            locateStrategy: 'xpath'
        },
        nameField: {
            selector: "//input[@name='namInput']",
            locateStrategy: 'xpath'
        },
        // welcomeScreen: {
        //     selector: '//div[@id="welcomeScreen"]',
        //     locateStrategy: 'xpath'
        // }
    }
}