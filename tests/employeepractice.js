module.exports = {
    before: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .waitForElementPresent('body')
    },
    after: browser=> {
        browser.end()
    },

    
    'First Test': browser => {
        browser
        .click('li[name="employee1"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', 'Cookie Monster')
        .verify.valueContains('input[name="nameEntry"]','Cookie Monster')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '7572929742')
        .verify.valueContains('input[name="phoneEntry"]','7572929742')
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', 'Cookie Monster')
        .verify.valueContains('input[name="titleEntry"]','Cookie Monster')
        .click('button[name="save"]')
    },
    'Second Test': browser => {
        browser
        .click('li[name="employee2"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', 'Cookie Monster')
        .verify.valueContains('input[name="nameEntry"]','Cookie Monster')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '7572929742')
        .verify.valueContains('input[name="phoneEntry"]','7572929742')
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', 'Cookie Monster')
        .verify.valueContains('input[name="titleEntry"]','Cookie Monster')
        .click('button[name="save"]')

    },
    'Third Test': browser => {
        browser
        .click('li[name="employee3"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', 'Cookie Monster')
        .verify.valueContains('input[name="nameEntry"]','Cookie Monster')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '7572929742')
        .verify.valueContains('input[name="phoneEntry"]','7572929742')
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', 'Cookie Monster')
        .verify.valueContains('input[name="titleEntry"]','Cookie Monster')
        .pause(1000)
        .click('button[name="cancel"]')
        .verify.valueContains('input[name="titleEntry"]','')
        .pause(1000)
    },

    'TESTy': browser => {
        browser
        .click('li[name="employee1"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', 'HAILSATANHAILSATAN')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '6666666666')
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', 'HAILSATANHAILSATAN')
        .click('button[name="save"]')
        .click('li[name="employee2"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', 'HAILSATANHAILSATAN')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '6666666666')
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', 'HAILSATANHAILSATAN')
        .click('button[name="save"]')
        .click('li[name="employee3"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', 'HAILSATANHAILSATAN')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '6666666666')
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', 'HAILSATANHAILSATAN')
        .click('button[name="save"]')
        .click('li[name="employee4"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', 'HAILSATANHAILSATAN')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '6666666666')
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', 'HAILSATANHAILSATAN')
        .click('button[name="save"]')
        .click('li[name="employee5"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', 'HAILSATANHAILSATAN')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '6666666666')
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', 'HAILSATANHAILSATAN')
        .click('button[name="save"]')
        .click('li[name="employee6"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', 'HAILSATANHAILSATAN')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '6666666666')
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', 'HAILSATANHAILSATAN')
        .click('button[name="save"]')
        .click('li[name="employee7"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', 'HAILSATANHAILSATAN')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '6666666666')
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', 'HAILSATANHAILSATAN')
        .click('button[name="save"]')
        .click('li[name="employee8"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', 'HAILSATANHAILSATAN')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '6666666666')
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', 'HAILSATANHAILSATAN')
        .click('button[name="save"]')
        .click('li[name="employee9"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', 'HAILSATANHAILSATAN')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '6666666666')
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', 'HAILSATANHAILSATAN')
        .click('button[name="save"]')
        .click('li[name="employee10"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', 'HAILSATANHAILSATAN')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '6666666666')
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', 'HAILSATANHAILSATAN')
        .click('button[name="save"]')


        
     
        

    },

    "Fourth Test": browser => {
        browser 
        var employeeName = 'Satan'
        var phone = '6666666666'
        var title = 'The_person_reading_this'
        browser
        .click('li[name="addemployee"]')
        .click('li[name="employee11"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', employeeName)
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', phone)
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', title)
        .click('button[name="save"]')
        .pause(5000)


    }
 

  
    
     

        
    
    

        
    





    
}