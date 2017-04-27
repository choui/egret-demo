
enum ActorType {
    NONE,
    ZhongChen, //忠臣
    FanZei, //反贼
    NeiJian, //内奸
    ZhuGong //主公
}

class Actor extends eui.Component implements ITickListener {

    private actorImg: eui.Image; //角色头像图片
    private actorTypeImg: eui.Image; //角色类型图片
    private resGroup: eui.Group; //图片资源组
    private isDieImg: eui.Image; //角色死亡图片
    private maskImg: eui.Image; //颜色遮罩图片
    private blurFliter = new egret.BlurFilter(0, 1);
    private faguangImg: eui.Image; //发光动画图片
    private faguangIndex: number = 0; //发光动画播放到那个步骤了

    constructor(actorType: ActorType, actorImgNumber: number) {
        super();
        this.skinName = 'resource/skins/actor.exml'
        this.actorImg.source = RES.getRes(`${actorImgNumber}_png`);
        this.actorType = actorType;
        this.isDieImg.source = RES.getRes(`actor_die_0${actorType}_png`);
        this.resGroup.filters = [this.blurFliter];
        this.resetActorStatus();
    }

    private resetActorStatus(): void {
        //重置发光状态
        this.faguangImg.visible = false;
        this.faguangIndex = 0;
        //重置死亡状态
        this.isDie = false;
    }

    onTick() {
        if (this.isDie || !this.isSelect) {
            return;
        }

        this.faguangIndex = this.faguangIndex >= 10 ? 0 : this.faguangIndex;
        this.faguangImg.source = RES.getRes(`waifaguang1_0${this.faguangIndex++}_png`);
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
            this.resGroup.filters = [this.blurFliter];
        }
    }

    //是否选中该角色
    private _isSelect: boolean = false;
    public get isSelect(): boolean {
        return this._isSelect;
    }
    public set isSelect(v: boolean) {
        this._isSelect = v;
        if (v) {
            this.faguangImg.visible = true;
        } else {
            this.faguangImg.visible = false;
        }
    }


}