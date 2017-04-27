class StartGame extends eui.Component {

    /**
     * EXML中对应id为tweenGroup的动画组对象
     */
    public startGroupBg1: egret.tween.TweenGroup;

    public startGameImg: eui.Image;

    constructor() {
        super();
        this.skinName = 'resource/skins/start_game.exml';

        this.startAnimate();

        this.startGameImg.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.addChild(new PlayGame());
        }, this);
    }

    private startAnimate(): void {
        UIUtil.rotateForever(this.startGroupBg1);
    }



}