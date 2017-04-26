
enum ActorType {
    NONE,
    ZhongChen, //忠臣
    FanZei, //反贼
    NeiJian, //内奸
    ZhuGong //主公
}

class Actor extends eui.Component {

    private actorImg: eui.Image;
    private actorTypeImg: eui.Image;
    private resGroup: eui.Group;
    private isDieImg: eui.Image;
    private maskImg: eui.Image;
    private blurFliter = new egret.BlurFilter(0, 1);

    constructor(actorType: ActorType, actorImgNumber: number) {
        super();
        this.skinName = 'resource/skins/actor.exml'
        this.actorImg.source = RES.getRes(`${actorImgNumber}_png`);
        this.actorTypeImg.source = RES.getRes(`actortype_0${actorType}_png`);
        this.isDieImg.source = RES.getRes(`actor_die_0${actorType}_png`);
        this.resGroup.filters = [this.blurFliter];
    }

    //角色类型    
    private _actorType: number;
    public get actorType(): number {
        return this._actorType;
    }
    public set actorType(v: number) {
        this._actorType = v;
        this.actorTypeImg.source = RES.getRes(`actortype_0${v}_png`);
    }

    //是否死亡
    private _isDie: boolean = false;
    public get isDie(): boolean {
        return this._isDie;
    }
    public set isDie(v: boolean) {
        this._isDie = v;
        if (v) {
            this.isDieImg.visible = true;
            // this.maskImg.visible = true;

            let colorMatrix = [
                0, 0, .5, 0, 0,
                0, 0, .5, 0, 0,
                0, 0, .5, 0, 0,
                0, 0, 0, 1, 0
            ];
            let colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            this.resGroup.filters = [colorFlilter, this.blurFliter];
        } else {
            this.isDieImg.visible = false;
            this.maskImg.visible = false;
            this.resGroup.filters = [this.blurFliter];
        }
    }


}