import { expect } from 'chai';
import LoginPage from '../login/LoginPage';
import ProfilePage from '../profile/ProfilePage';
import DiaryPage from '../diary/DiaryPage';

describe('DIARY', () => {

   before( () => {
        LoginPage.login();
        browser.pause(3000);
    });


   it('should click Diary button', () => {
       const el = DiaryPage.diaryBtn;
       el.click();
       browser.pause(3000);
    });

    it('should have correct title', () => {
        const actual = DiaryPage.h1.getText();
        const expected = 'Daily reports';
        expect(actual).eq(expected);
    });

    it('should click Create day report button`', () => {
        const el = DiaryPage.createDayReportBtn;
        el.click();
        browser.pause(2000);
    });



});