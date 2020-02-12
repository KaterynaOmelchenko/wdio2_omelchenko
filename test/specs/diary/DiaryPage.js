import Page from '../Page';

class DiaryPage extends Page{

    get h1() {
        return $('//h1');
    }

    get siteName() {
        return $('//span[@id="site-name"]');
    }

    get popUpNotification() {
        return $('//h4[@class="notification-title"]');
    }

    get diaryBtn() {
        return $('//a[contains(text(),"Diary")]');
    }

    get createDayReportBtn() {
        return $('//a[contains(text(),"Create day report")]');
    }

    get checkBox() {
        return $('//input[@id="input-0"]');
    }

    get morale() {
        return $('//select[@name="morale"]');
    }

    get practiceHour() {
        return $('//input[@name="hours"]');
    }

    get howWasYourDay() {
        return  $('//textarea[@name="description"]');
    }

    get submitBtn() {
        return $('//button[@class="btn btn-primary"]');
    }

    get createdDailyReportText() {
        return $('//div[@class="container"]//div[3]//div[2]');
    }



}

export default new DiaryPage; // Экспортируем не класс, а экземпляр класса