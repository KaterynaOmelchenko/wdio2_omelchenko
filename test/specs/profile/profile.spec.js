import { expect } from 'chai';
import LoginPage from '../login/LoginPage';
import ProfilePage from '../profile/ProfilePage';

describe('PROFILE', () => {

   before( () => {
        LoginPage.login();
    });

   it('should check h1 after succesful login', () => {
       browser.pause(3000);
       const actual = ProfilePage.h1.getText();
       const expected = 'Test Testovich';
       expect(actual).eq(expected);
    });



});