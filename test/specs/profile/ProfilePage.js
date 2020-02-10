import Page from '../Page';

class ProfilePage extends Page{

    get h1() {
        return $('//h1');
    }

    get siteName() {
        return $('//span[@id="site-name"]');
    }

    get popUpNotification(){
        return $('//h4[@class="notification-title"]');
    }
}


export default new ProfilePage; // Экспортируем не класс, а экземпляр класса