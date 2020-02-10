import { expect } from 'chai';
import LoginPage from './LoginPage';
import ProfilePage from "../profile/ProfilePage";

describe('LOGIN positive testing', () => {

    it('should open Login page', () => {
        LoginPage.open();
    });

    it('should have correct title', () => {
        const actual = LoginPage.h1.getText();
        const expected = 'User Login';
        expect(actual).eq(expected);

    });

    it('should fill out email field', () => {
        LoginPage.email.setValue('olya6avg@gmail.com');
    });

    it('should fill out password field', () => {
        LoginPage.password.setValue('11111');
    });

    it('should click Submit', () => {

    });

    it('should check h1 text', () => {
       const actual = ProfilePage.h1.getText();
       const expected = 'Test Testovich';
       expect(actual).eq(expected);
    });


});