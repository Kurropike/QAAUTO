module.exports = {
    url: "http://devtools.web.roku.com/RokuRemote/",
    elements: {
        skipForNow: {
            selector: '//button[@class="ret-roku-btn empty"]',
            locateStrategy: 'xpath'
        },
        deviceIpHost: {
            selector: '//input[@class="ret-roku-input"]',
            locateStrategy: 'xpath'
        },
        deviceName: {
            selector: '(//input[@class="ret-roku-input"])[2]',
            locateStrategy: 'xpath'
        },
        deviceModel: {
            selector: '(//input[@class="ret-roku-input"])[3]',
            locateStrategy: 'xpath'
        },
        addButton: {
            selector: '//button[@class="ret-roku-btn"]',
            locateStrategy: 'xpath'
        },
        upButton: {
            selector: '(//div[@class="clickable remote-button center"])[1]',
            locateStrategy: 'xpath'
        },
        downButton: {
            selector: '(//div[@class="clickable remote-button center"])[2]',
            locateStrategy: 'xpath'
        },

        rightButton: {
            selector: '(//div[@class="clickable remote-button"])[3]',
            locateStrategy: 'xpath'
        },
        leftButton: {
            selector: '(//div[@class="clickable remote-button"])[1]',
            locateStrategy: 'xpath'
        },
        okButton: {
            selector: '(//div[@class="clickable remote-button"])[2]',
            locateStrategy: 'xpath'

        },
        settingsButton: {
            selector: '(//div[@class="clickable remote-button double"])[4]',
            locateStrategy: 'xpath'

        },
        inputText: {
            selector: '//input[@class="form-control ret-roku-input rrt-input roku-input"]',
            locateStrategy: 'xpath'

        },
        inputText: {
            selector: '//input[@class="form-control ret-roku-input rrt-input roku-input"]',
            locateStrategy: 'xpath'

        },
    }
}