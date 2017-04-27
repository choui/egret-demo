class PlayGame extends eui.Component {

    private tickListeners: ITickListener[] = [];

    constructor() {
        super();
        this.skinName = 'resource/skins/play_game.exml';
        this.createActors();

        egret.startTick(() => {
            RR.each(this.tickListeners, (listener: ITickListener) => {
                listener.onTick();
            });
            return true;
        }, this);
    }


    public registerTickListener(listener: ITickListener) {
        this.tickListeners.push(listener);
    }

    private createActors() {
        let actors = ActorPool.randomActors();
        RR.each(actors, (actor: Actor, index, actors) => {
            if (index == 1) {
                actor.isSelect = true;
            }

            this.registerTickListener(actor);
            this.addChild(actor);
            if (RR.random(0, 10) > 6) {
                let act = <Actor>actor;
                act.isDie = true;
            }
        });
    }

} 