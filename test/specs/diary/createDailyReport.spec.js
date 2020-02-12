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

    it('should click button Create day report', () => {
        const el = DiaryPage.createDayReportBtn;
        el.click();
        browser.pause(2000);
    });

    it('should have correct title', () => {
        const actual = DiaryPage.h1.getText();
        const expected = 'Create day report';
        expect(actual).eq(expected);
    });


    it('should check one required box', () => {
        const el = DiaryPage.checkBox;
        el.click();
        browser.pause(1000);
    });

    it('should set up morale dropdown', () => {
        const el = DiaryPage.morale;
        el.selectByVisibleText('5');
        browser.pause(1000);
    });

    it('should fill up practise hours input field', () => {
        const el = DiaryPage.practiceHour;
        el.setValue('2');
        browser.pause(1000);
    });

    it('should fill up How was your day input field', () => {
        const el = DiaryPage.howWasYourDay;
        el.setValue('Lorem'.repeat(6));
        browser.pause(1000);
    });

    it('should click Submit button', () => {
        const el = DiaryPage.submitBtn;
        el.click();
        browser.pause(2000);
    });

    it('should have correct title', () => {
        const actual = DiaryPage.h1.getText();
        const expected = 'Daily reports';
        expect(actual).eq(expected);
    });

    it('should have correct text (created daily report) ', () => {
        const actual = DiaryPage.createdDailyReportText.getText();
        const expected = 'Lorem'.repeat(6);
        expect(actual).eq(expected);
    });



});