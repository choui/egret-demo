class Card extends eui.Component implements ITickListener {

    constructor(actorType: ActorType, actorImgNumber: number) {
        super();
        this.skinName = 'resource/skins/card.exml'
    }

    onTick() {
    }

}