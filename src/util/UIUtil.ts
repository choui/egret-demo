class UIUtil {

    public static rotateForever(group: egret.tween.TweenGroup): void {
        group.addEventListener('complete', () => {
            group.play(0);
        }, null);

        group.play();
    }

}