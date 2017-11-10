/**
 * 场景管理类
 */

class SceneManager {
    constructor () {
        this.registObserver();
    }

    private registObserver () {
        Observer.getInstance().regist(Commands.OPEN_NEWGAME, this.openNewGame, this);
        Observer.getInstance().regist(Commands.CLOSE_NEWGAME, this.closeNewGame, this);
        Observer.getInstance().regist(Commands.OPEN_JODO, this.openJodo, this);
        Observer.getInstance().regist(Commands.CLOSE_JODO, this.closeJodo, this);
        Observer.getInstance().regist(Commands.OPEN_QUIT, this.openQuit, this);
        Observer.getInstance().regist(Commands.CLOSE_QUIT, this.closeQuit, this);
    }

    private openNewGame () {
        var fruithomePage = FruitHomePage.getInstance();
        fruithomePage.channelBg.stop();
        var dur = 500;
        this.disappearHomePage(fruithomePage, dur);
        egret.setTimeout(function () {
            var parentNode = fruithomePage.parent;
            parentNode.removeChild(fruithomePage);
            FruitHomePage.destroyInstance();
            var fruitNewGamePage = FruitNewGamePage.getInstance();
            parentNode.addChild(fruitNewGamePage);
        }, this, dur + 100);
    }

    private closeNewGame () {
        var fruitNewGamePage = FruitNewGamePage.getInstance();
        var soundStart: egret.Sound = RES.getRes("over_mp3");
        var channelStart = soundStart.play(0, 1);
        var dur = 1000;
        this.disappearNewGamePage(fruitNewGamePage, dur);
        egret.setTimeout(function () {
            channelStart.stop();
            var parentNode = fruitNewGamePage.parent;
            parentNode.removeChild(fruitNewGamePage);
            FruitNewGamePage.destroyInstance();
            var fruithomePage = FruitHomePage.getInstance();
            parentNode.addChild(fruithomePage);
        }, this, dur + 100);
    }

    private openJodo () {
        var fruithomePage = FruitHomePage.getInstance();
        fruithomePage.channelBg.stop();
        var dur = 500;
        this.disappearHomePage(fruithomePage, dur);
        egret.setTimeout(function () {
            var parentNode = fruithomePage.parent;
            parentNode.removeChild(fruithomePage);
            FruitHomePage.destroyInstance();
            var fruitJodoPage = FruitJodoPage.getInstance();
            parentNode.addChild(fruitJodoPage);
        }, this, dur + 100);
    }

    private closeJodo () {
        var fruitJodoPage = FruitJodoPage.getInstance();
        var dur = 500;
        this.disappearJodoPage(fruitJodoPage, dur);
        egret.setTimeout(function () {
            var parentNode = fruitJodoPage.parent;
            parentNode.removeChild(fruitJodoPage);
            FruitJodoPage.destroyInstance();
            var fruithomePage = FruitHomePage.getInstance();
            parentNode.addChild(fruithomePage);
        }, this, dur + 100);
    }

    private openQuit () {
        var fruithomePage = FruitHomePage.getInstance();
        fruithomePage.channelBg.stop();
        var dur = 500;
        this.disappearHomePage(fruithomePage, dur);
        egret.setTimeout(function () {
            var parentNode = fruithomePage.parent;
            parentNode.removeChild(fruithomePage);
            FruitHomePage.destroyInstance();
            var fruitQuitPage = FruitQuitPage.getInstance();
            parentNode.addChild(fruitQuitPage);
        }, this, dur + 100);
    }

    private closeQuit () {
        var fruitQuitPage = FruitQuitPage.getInstance();
        var dur = 500;
        this.disappearQuitPage(fruitQuitPage, dur);
        egret.setTimeout(function () {
            var parentNode = fruitQuitPage.parent;
            parentNode.removeChild(fruitQuitPage);
            FruitQuitPage.destroyInstance();
            var fruithomePage = FruitHomePage.getInstance();
            parentNode.addChild(fruithomePage);
        }, this, dur + 100);
    }

    private disappearHomePage (fruithomePage, dur) {
        var tw_headerBgtween = egret.Tween.get(fruithomePage.headerBg).to({y: -183}, dur);
        var tw_headerTitle = egret.Tween.get(fruithomePage.headerTitle).to({y: -155}, dur);
        var tw_headerSubTitle = egret.Tween.get(fruithomePage.headerSubTitle).to({y: -111}, dur);
        var tw_headerTip = egret.Tween.get(fruithomePage.headerTip).to({x: -161, y: 150}, dur);

        var tw_ringDojo = egret.Tween.get(fruithomePage.ringDojo).to({scaleX: 0, scaleY: 0}, dur);
        var tw_contentDojo = egret.Tween.get(fruithomePage.contentDojo).to({scaleX: 0, scaleY: 0}, dur);
        var tw_contentNewGame = egret.Tween.get(fruithomePage.contentNewGame).to({scaleX: 0, scaleY: 0}, dur);
        var tw_ringNewGame = egret.Tween.get(fruithomePage.ringNewGame).to({scaleX: 0, scaleY: 0}, dur);
        var tw_contentQuit = egret.Tween.get(fruithomePage.contentQuit).to({scaleX: 0, scaleY: 0}, dur);
        var tw_ringQuit = egret.Tween.get(fruithomePage.ringQuit).to({scaleX: 0, scaleY: 0}, dur);
        var tw_contentTip = egret.Tween.get(fruithomePage.contentTip).to({scaleX: 0, scaleY: 0}, dur);
    }

    private disappearNewGamePage(fruitNewGamePage, dur) {
        GameContainer.destroyInstance();

        var tw_gameX = egret.Tween.get(fruitNewGamePage.gameX).to({x: 640}, dur);
        var tw_gameXX = egret.Tween.get(fruitNewGamePage.gameXX).to({x: 665}, dur);
        var tw_gameXXX = egret.Tween.get(fruitNewGamePage.gameXXX).to({x: 695}, dur);
        var tw_gameXF = egret.Tween.get(fruitNewGamePage.gameXF).to({x: 651}, dur);
        var tw_gameXXF = egret.Tween.get(fruitNewGamePage.gameXXF).to({x: 678.5}, dur);
        var tw_gameXXXF = egret.Tween.get(fruitNewGamePage.gameXXXF).to({x: 710}, dur);

        var tw_gameScoreIcon = egret.Tween.get(fruitNewGamePage.gameScoreIcon).to({x: -65}, dur);
        var tw_gameScore = egret.Tween.get(fruitNewGamePage.gameScore).to({x: -18}, dur);
        var tw_gameBestScore = egret.Tween.get(fruitNewGamePage.gameBestScore).to({x: -67}, dur);

        var tw_gameover = egret.Tween.get(fruitNewGamePage.gameover).to({scaleX: 0, scaleY: 0, alpha: 0}, dur);
    }

    private disappearJodoPage(fruitJodoPage, dur) {
        var tw_jodoInfo = egret.Tween.get(fruitJodoPage.jodoInfo).to({scaleX: 0, scaleY: 0}, dur);
    }

    private disappearQuitPage(fruitQuitPage, dur) {
        var tw_quitInfo = egret.Tween.get(fruitQuitPage.quitInfo).to({scaleX: 0, scaleY: 0}, dur);
    }
}