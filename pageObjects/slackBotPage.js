module.exports = {
    url: 'https://app.slack.com/client/T039C2PUY/DUZRQNJG7',
    elements: {
        xpathSignIn: {
            selector: '//a[@data-qa="link_sign_in_nav"]',
            locateStrategy: 'xpath'
        },
        xpathSlackUrl: {
            selector: '//input[@class="input_inline align_right small_right_margin team_name_input"]',
            locateStrategy: 'xpath'
        },
        userNameTextField: 'input[type="email"]',
        passwordTextField: 'input[type="password"]',
        //findConvo: 'input[@id="dm-browser"]',
        // searchBarButton: 'button[class="c-button-unstyled p-classic_nav__right__search p-classic_nav__no_drag"]',
        // searchBar: {
        //     selector: '//div[@class="c-search__input_box"]',
        //     locateStrategy: 'xpath'
        // },
        
        xpathJon: {
            selector: '(//div[@role="img"])[1]',
            locateStrategy: 'xpath'
        },
        // inputName: {
        //     selector: '//input[@id="dm-browser"]',
        //     locateStrategy: 'xpath'
        // },
        message: {
            selector: '(//div[@class="ql-editor ql-blank"])[1]',
            locateStrategy: 'xpath'
        },


    }
}