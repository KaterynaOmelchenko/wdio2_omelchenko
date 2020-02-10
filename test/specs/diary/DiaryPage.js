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
}


export default new DiaryPage; // Экспортируем не класс, а экземпляр класса