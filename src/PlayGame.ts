class PlayGame extends eui.Component {

    private tickListeners: ITickListener[] = [];

    private cardGroup: eui.Group;
    private actors: Actor[];

    constructor() {
        super();
        this.skinName = 'resource/skins/play_game.exml';

        egret.startTick(() => {
            RR.each(this.tickListeners, (listener: ITickListener) => {
                listener.onTick();
            });
            return true;
        }, this);


        this.createActors();
        this.startGame();
    }


    public registerTickListener(listener: ITickListener) {
        this.tickListeners.push(listener);
    }

    private createActors() {
        this.actors = ActorPool.random5Actors();
        RR.each(this.actors, (actor: Actor, index, actors) => {
            this.registerTickListener(actor);
            this.addChild(actor);
        });
    }

    private startGame() {
        RR.each(this.actors, (actor: Actor) => {
            if (actor.actorType == ActorType.ZhuGong) {
                actor.isSelect = true;
            }
        });
    }

} 