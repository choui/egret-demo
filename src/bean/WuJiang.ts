enum WuJiangType {
    None,
    XiangYu, //项羽
    ZhuGeLiang, //诸葛亮
    DaQiao, //大乔
    ZhenJi, //甄姬
    DiaoChan, //貂蝉
    LiuBei, //刘备
    SunQuan, //孙权
    CaoCao //曹操
}

enum Country {
    None,
    Wei, //魏
    Shu, //蜀
    Wu, //吴
    Qun //群雄
}

class WuJiang {
    wuJiangType: WuJiangType; //武将类型
    imageNumber: number; //武将图片顺序
    isMaster: boolean; //武将是否是主公
    maxBlood: number; //武将总共有多少血
    country: Country; //武将是那个国家的

    currentBlood: number; //当前有多少血
    cards: Card[]; //武将持有的拍数量
}