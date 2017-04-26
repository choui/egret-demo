class PlayGame extends eui.Component {

    constructor() {
        super();
        this.skinName = 'resource/skins/play_game.exml';
        this.createActors();
    }

    private createActors() {
        let actors = ActorPool.randomActors();
        RR.each(actors, (actor, index, actors) => {
            this.addChild(actor);
            if (RR.random(0, 10) > 6) {
                let act = <Actor>actor;
                act.isDie = true;
            }
        });
    }

}