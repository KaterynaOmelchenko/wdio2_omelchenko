const { expect } = require('chai');
const email = Math.random()+'kakak@gmail.com';
const firstName = 'John';

describe('Register page', () => {

    it('should have the right title', () => {
        browser.url('https://stage.pasv.us/user/register');
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Progress Monitor';
        expect(actualTitle).equal(expectedTitle);
    });

    it( 'should has a correct title', () => {
     const actualH1text = $('h1').getText();
     const expectedH1Text = 'User Register';
     expect(actualH1text).equal(expectedH1Text);
    });

   it( 'should has a correct description', () => {
        const actual = $('p').getText();
        const expected = 'Profiles with fictitious or dummy data will be deleted.';
        expect(actual).equal(expected);

    });

    it( 'should has a correct submit button text', () => {
        const actual = $('form button').getText();
        const expected = 'Submit';
        expect(actual).equal(expected);
    });

    it( 'should fill up first name field', () => {
        const element = $('form input[name="firstName"]');
        element.setValue(firstName);
    });

    it( 'should fill up last name field', () => {
        const element = $('form input[name="lastName"]');
        element.setValue('Smith');
    });

    it( 'should fill up phone num field', () => {
        const element = $('form input[name="phone"]');
        element.setValue('14259195668');

    });

    it( 'should fill up email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(email);
    });


    it( 'should fill up password field', () => {
        const element = $('form input[name="password"]');
        element.setValue('abrakadabra');
    });

    it( 'should fill up about field', () => {
        const element = $('form textarea[name="about"]');
        element.setValue('hdfkdfjldlkfj djdfsdfjdfkj kdfjdkfdj');
    });

    it( 'should fill up goals field', () => {
        const element = $('form textarea[name="goals"]');
        element.setValue('eat sleep code');
    });

    it( 'should choose English level dropdown', () => {
        const element = $('form select[name="englishLevel"]');
        element.selectByVisibleText('Native');
    });

    it( 'should choose click button', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(2000);
    });


    //login title
    //email passw
    //log in button
    //wait
    // title first name+last name

});
