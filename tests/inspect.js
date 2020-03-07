module.exports = {
    before: browser => {
        browser.url('https://www.quicksurveys.com/tqsruntime/service?getDataUrl=https%3a%2f%2fttm.toluna.com%2fapi%2fsurveys%2fstart%3fsurveyStartDataEncrypted%3dbnVD7tPgJFNJqeVSMYlJf5VAA9rT%2fKN9dU%2bbbNSPMWf89DKwUB%2f6PW8JPcTVHhYi9GMOUvjUjTefSO1jjZ7RJX%2f2NYl%2f%2fbIxCJJnxG9L7ZCs9zewFp6T6wHHSKJqHd4ix2lXGc2Rog41I8b39%2fzzW85dKGgLX3pDL4sOiRg0jXXmBIPeVKJpFM%2fNI%2flL9pbDzC6Z0knrhs4nAWEMzCEYlExgEsGviilMoLweJbWzyUZVeB04fABLrKypQu2Ej3nFEYaognAgtFFnepDGovzwe2iouGgCynA9tWbzEn93u%2fo0pdtykR43HNf7AiXxHPFq6I%2bsSX5SDVtievMGCwtKFpIsTbojUApemn%2bD8xE6EfP22coaxBnWKA0OKhomLY9OTWZo8RCzPCCh%2fH%2bL3S4rcqZwR6g%2bv4S4DgcXaX0c3RZeqT3h2irK1K4Zvzk94FuAxdemEdJG0rA38LMFinvrTdzn2YIn8pUHdNQ81m10vflie5Y8j7qlzZyaQrcRbf1Wbhn3spTO2r1OiE3%2bFknGAo1lha2%2f4gEFB4e1xxU9FTnyT60unu9EE2Kaw9nCbkYL&cultureId=1&fdsStartData=ECVrfaRwxsVb+CbdoJoqIR5xWJIEYWMTp9vF9R3oR8v/7UhEcgLCva5mvhYuwN4LdY9SvXypT1ivJLO/sYifp3k4uN+vnj/Mkmc7buOg7vwLjo1ybkJPdk/HY1rLOgQsYipVJq3nOgTDPwcnIbxhkep00W4XgfBLPNV+wSqcbTsStk6drm2up8F0hM4uu7NB2PDBaX0dxwTEvd2T9hYXzKihHolq4vgQbJoR3APO48DK/779BymfG8ydP5/3i3tUOhmUqI2tcVDjcO637CppmA==')
            .waitForElementPresent('body')
    },
    after: browser => {
        browser
            .end()
    },
    'Searching Lomando': browser => {
        browser 
        .click()
        .click('button[value="next"]')
        .pause(2000)

    }
    
}