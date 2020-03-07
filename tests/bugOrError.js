
module.exports = {
    beforeEach: browser => browser.url('https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html'),
    after: browser => browser.end(),
    
    // 'Problem 1': browser => {
    //     browser
    //         .click('li[name="employee7"]')
    //         .clearValue('input[name="nameEntry"]')
    //         .setValue('input[name="nameEntry"]', 'Billy Bob')
    //         .click('button[name="save"]')
    //         .click('li[name="employee9"]')
    //         .verify.value('input[name="nameEntry"]', 'Eve Sparks')
    //         .click('li[name="employee7"]')
    //         .clearValue('input[name="nameEntry"]')
    //         .setValue('input[name="nameEntry"]', 'Ruby Estrada')
    //         .verify.value('[name="nameEntry"]', 'Ruby Estrada')
    // },

    
    
    // 'Problem 2': browser => {
    //     browser 
    //     //The error was that the Browser header was missing. 
    //         .click('[name="employee5"]')
    //     //The brackets were missing on .click('[name="employee5"])
    //         .clearValue('[name="titleEntry"]')
    //         .setValue('[name="titleEntry"]', 'Best Manager Ever')
    //         .clearValue('[name="phoneEntry"]')
    //         .setValue('[name="phoneEntry"]', '1234567890')
    //         .pause(1000)
    //         .click('button[name="save"]')
    //         .click('[name="employee8"]')
    //         .expect.element('[name="titleEntry"]').value.not.to.equal('Best Manager Ever')
    //         browser
    //         .click('[name="employee5"]')
    //         .expect.element('[name="phoneEntry"]').value.to.equal('1234567890')
    //         browser
    //         .expect.element('[name="titleEntry"]').value.to.equal('Best Manager Ever')
    //         browser
    // },
    // 'Problem 3': browser => {
    //     browser
    //         .click('[name="employee1"]')
    //         .waitForElementPresent('[name="nameEntry"]')
    //         .clearValue('[name="nameEntry"]')
    //         .setValue('[name="nameEntry"]', 'New Person')
    //         .click('#saveBtn')
    //         .click('[name="employee2"]')
    //         .expect.element('[name="nameEntry"]').value.not.to.equal('New Person').before(2000)
    //     browser
    //         .click('[name="employee1"]')
    //         .expect.element('[name="nameEntry"]').value.to.equal('New Person').before(2000)
    // }, //error in test.
    // 'Problem 4': browser => {
    //     browser
    //         .click('[name="employee5"]')
    //         .clearValue('[name="nameEntry"]')
    //         .click('#saveBtn')
    //         .assert.containsText('.errorCard', 'The name field must be between 1 and 30 characters long.')
    //         .assert.value('[name="nameEntry"]', 'Dollie Berry')
    // }, //Bug in software. 
    'Problem 5': browser => {
        browser
            .click('[name="employee-4"]')
            .clearValue('[name="phoneEntry"]')
            .setValue('[name="phoneEntry"]', '8015551234')
            .click('[name="cancel"]')
            .click('[name="employee5"]')
            .click('[name="employee-4"]')
            .expect.element('[name="phoneEntry"]').value.not.to.equal('8015551234')
    }//bug in software, erros in code. 
}
