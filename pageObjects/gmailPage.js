module.exports = {
    url: 'https://mail.google.com/mail/u/0/#inbox',
    elements: {
        recipients: {
            selector: '//div[@class="aoD hl"]',
            locateStrategy: 'xpath'
        },
        signInEmailOrPhone: {
        selector: '//input[@type="email"]',
        locateStrategy: 'xpath'
        },
        passwordInput: {
            selector: '(//input[@class="whsOnd zHQkBf"])[1]',
            locateStrategy: 'xpath'
        }

    }
}