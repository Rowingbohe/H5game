/**
 * 游戏管理类
 */

class GameManager {
    constructor () {
        this.registObserver();
    }

    private registObserver () {
        Observer.getInstance().regist(Commands.ADD_SCORE, this.addScore, this);
        Observer.getInstance().regist(Commands.ADD_FAILED, this.addFailed, this);
        Observer.getInstance().regist(Commands.GAME_OVER, this.gameOver, this);
    }

    private addScore () {
        var fruitNewGamePage = FruitNewGamePage.getInstance();
        fruitNewGamePage.scoreCount += 1;
        fruitNewGamePage.gameScore.text = String(fruitNewGamePage.scoreCount);
    }

    private addFailed () {
        var fruitNewGamePage = FruitNewGamePage.getInstance();
        fruitNewGamePage.failedCount += 1;
        if (fruitNewGamePage.failedCount == 1) {
            var tw_gameXF = egret.Tween.get(fruitNewGamePage.gameXF).to({scaleX: 1, scaleY: 1}, 200, egret.Ease.backOut);
        } else if (fruitNewGamePage.failedCount == 2) {
            var tw_gameXXF = egret.Tween.get(fruitNewGamePage.gameXXF).to({scaleX: 1, scaleY: 1}, 200, egret.Ease.backOut);
        } else if (fruitNewGamePage.failedCount == 3) {
            var tw_gameXXXF = egret.Tween.get(fruitNewGamePage.gameXXXF).to({scaleX: 1, scaleY: 1}, 200, egret.Ease.backOut);
            Observer.getInstance().fire(Commands.GAME_OVER);
        }
    }

    private gameOver () {
        var gameContainer = GameContainer.getInstance();
        gameContainer.timer.stop();

        var fruitNewGamePage = FruitNewGamePage.getInstance();
        var tw_gameover = egret.Tween.get(fruitNewGamePage.gameover).to({scaleX: 1, scaleY: 1, alpha: 1}, 500, egret.Ease.backOut);

        fruitNewGamePage.once(egret.TouchEvent.TOUCH_TAP, this.quitGamePage, this);
    }
    private quitGamePage () {
        Observer.getInstance().fire(Commands.CLOSE_NEWGAME);
    }
}