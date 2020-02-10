const { expect } = require('chai');
const { URL_LOGIN } = require('./register');

describe('CREATE DAY REPORT', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $('form input[name="email"]').setValue('olya6avg@gmail.com');
        $('form input[name="password"]').setValue('11111');
        $('form input[name="submit"]').click();
        browser.pause(1000);
    });

    it('should have the rigth title', () => {
        browser.url('http://stage.pasv.us/diary/create');
        browser.pause(5000);
    });
});
