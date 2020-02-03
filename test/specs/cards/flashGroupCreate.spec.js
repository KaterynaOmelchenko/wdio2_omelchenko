const { expect } = require('chai');

describe('FLASH GROUP CREATE', () => {
    before('Login as admin', () => {

        browser.url('https://stage.pasv.us/user/login');
        $('form input[name="email"]').setValue('usa.alika@gmail.com');
        $('form input[name="password"]').setValue('1234567');
        $('form button[type="submit"]').click();
        browser.pause(3000);
    });


   after('AFTER', ()=> {
        browser.pause(3000);
    });


    it('should click top menu Cards', () => {
        browser.$('//div[@id="site-menu"]//a[@qa="cards-link"]').click();
    });

    it('should click button Create new FlashGroup', () =>{
        browser.$('//button[@qa="flash-create-new-group"]').click();
    });

    it('should check if modal form is open', () => {
        browser.pause(500);
       const el = browser.$('//div[contains(@class, "sidepanel")]');
       expect(el.isDisplayed()).true;
    });

    it('should check if modal form title is correct', () => {
        const el = browser.$('//div[contains(@class, "sidepanel")]//*[@class-modal-title"]');
        const actual = el.getText();
        const expected = 'Create Flash Group';
        expect(actual).eq(expected);
    });

    it('should fill up group name field ', () => {
        const el = browser.$('//div[contains(@class, "sidepanel")]//input[@name="name"]');
        el.setValue('My group description 123...');
    });

    it('should submit form ', () => {
        const el = browser.$('//div[contains(@class, "sidepanel")]//input[@name="name"]');
        el.setValue('My group description 123...');
        browser.pause(300);
    });

    it('should submit form', ()=>{
        const el = browser.$('//div[contains(@class, "sidepanel")]//button[@type="submit"]');
        el.click();
        browser.pause(500);
    })

    it('should first item in the list be equal created group title', () => {
        const actual = browser.$('//div[@qa="flash-group-list"]//h4/a').getText();
        const expected = 'My group name 123';
    });

    it('should first item in the list be equal created group description', () => {
        const actual = browser.$('//div[@qa="flash-group-list"]//div[@qa="description"]').getText();
        const expected = 'My group description 123...';
    });

    it('should verify created title group is clicable', () => {
        const el = browser.$('//div[@qa="flash-group-list"]//h4/a');
        el.click();
        browser.pause(300);
    });

    it('should clocked group has correct tittle', () => {
        const actual = browser.$('//h1').getText();
        const expected = 'My group name 123';
        expect(actual).eq(expected);

    });


});

