class ActorPool {

    public static randomActors2(): Actor[] {
        let posiArr: [Posi] = [
            { x: 14, y: 122 }, //左
            { x: 350, y: 12 }, //上左
            { x: 780, y: 12 }, //上右
            { x: 1116, y: 122 }, //右
            { x: 1116, y: 478 }, //下
        ];


        let actorSize = RR.random(3, 5); //随机生成角色的个数[3-5]

        let actorIndex = [4];
        for (let i = 1; i < actorSize; i++) {
            let randomIndex = RR.randomNotIn(0, 4, actorIndex);
            actorIndex.push(randomIndex);
        }

        //随机排序        
        actorIndex.sort(function () {
            let random = RR.random(0, 2);
            switch (random) {
                case 0:
                    return -1;
                case 1:
                    return 0;
                case 2:
                    return 1;
            }
        });

        let actorArr = [], actorImgArr = [];

        //生成唯一的一个主公         
        let zhugongPosi = posiArr[actorIndex[0]];
        let zhugongImgNum = RR.randomNotIn(1, 20, actorImgArr);
        let zhugong = new Actor(ActorType.ZhuGong, zhugongImgNum);
        zhugong.x = zhugongPosi.x;
        zhugong.y = zhugongPosi.y;
        actorArr.push(zhugong);
        actorImgArr.push(zhugongImgNum);

        //至少生成一个反贼        
        let fanzeiPosi = posiArr[actorIndex[1]];
        let fanzeiImgNum = RR.randomNotIn(1, 20, actorImgArr);
        let fanzei = new Actor(ActorType.FanZei, fanzeiImgNum);
        fanzei.x = fanzeiPosi.x;
        fanzei.y = fanzeiPosi.y;
        actorArr.push(fanzei);
        actorImgArr.push(fanzeiImgNum);

        for (let i = 2; i < actorIndex.length; i++) {
            let randomIndex = actorIndex[i];
            let randomPosi = posiArr[randomIndex];
            let randomImgNum = RR.randomNotIn(1, 20, actorImgArr);
            let randomActor = new Actor(RR.random(1, 3), randomImgNum);
            randomActor.x = randomPosi.x;
            randomActor.y = randomPosi.y;
            actorArr.push(randomActor);
            actorImgArr.push(randomImgNum);
        }

        return actorArr;
    }

    public static random5Actors2(): Actor[] {
        let posiArr: [Posi] = [
            { x: 14, y: 122 }, //左
            { x: 350, y: 12 }, //上左
            { x: 780, y: 12 }, //上右
            { x: 1116, y: 122 }, //右
            { x: 1116, y: 478 }, //下
        ];

        let actorSize = 5; //生成角色5个
        let actorIndex = [0, 1, 2, 3, 4];

        //随机排序五个角色的位置        
        actorIndex.sort(function () {
            let random = RR.random(0, 2);
            switch (random) {
                case 0:
                    return -1;
                case 1:
                    return 0;
                case 2:
                    return 1;
            }
        });

        let actorArr = [], actorImgArr = [];

        //生成1个主公         
        let zhugongPosi = posiArr[actorIndex[0]];
        let zhugongImgNum = RR.randomNotIn(1, 20, actorImgArr);
        let zhugong = new Actor(ActorType.ZhuGong, zhugongImgNum);
        zhugong.x = zhugongPosi.x;
        zhugong.y = zhugongPosi.y;
        actorArr.push(zhugong);
        actorImgArr.push(zhugongImgNum);

        //生成2个反贼     
        let fanzei1Posi = posiArr[actorIndex[1]];
        let fanzei1ImgNum = RR.randomNotIn(1, 20, actorImgArr);
        let fanzei1 = new Actor(ActorType.FanZei, fanzei1ImgNum);
        fanzei1.x = fanzei1Posi.x;
        fanzei1.y = fanzei1Posi.y;
        actorArr.push(fanzei1);
        actorImgArr.push(fanzei1ImgNum);

        let fanzei2Posi = posiArr[actorIndex[2]];
        let fanzei2ImgNum = RR.randomNotIn(1, 20, actorImgArr);
        let fanzei2 = new Actor(ActorType.FanZei, fanzei2ImgNum);
        fanzei2.x = fanzei2Posi.x;
        fanzei2.y = fanzei2Posi.y;
        actorArr.push(fanzei2);
        actorImgArr.push(fanzei2ImgNum);

        //生成1个忠臣
        let zhongchenPosi = posiArr[actorIndex[3]];
        let zhongchenImgNum = RR.randomNotIn(1, 20, actorImgArr);
        let zhongchen = new Actor(ActorType.ZhongChen, zhongchenImgNum);
        zhongchen.x = zhongchenPosi.x;
        zhongchen.y = zhongchenPosi.y;
        actorArr.push(zhongchen);
        actorImgArr.push(zhongchenImgNum);

        //生成1个内奸
        let neijianPosi = posiArr[actorIndex[4]];
        let neijianImgNum = RR.randomNotIn(1, 20, actorImgArr);
        let neijian = new Actor(ActorType.FanZei, neijianImgNum);
        neijian.x = neijianPosi.x;
        neijian.y = neijianPosi.y;
        actorArr.push(neijian);
        actorImgArr.push(neijianImgNum);

        return actorArr;
    }

    public static random5Actors(): Actor[] {
        let posiArr: [Posi] = [
            { x: 14, y: 122 }, //左
            { x: 350, y: 12 }, //上左
            { x: 780, y: 12 }, //上右
            { x: 1116, y: 122 }, //右
            { x: 1116, y: 478 }, //下
        ];

        let actorSize = 5; //生成角色5个
        let actorType: ActorType[] = [ActorType.ZhuGong, ActorType.ZhongChen, ActorType.FanZei, ActorType.FanZei, ActorType.NeiJian];

        //随机排序五个角色的位置        
        actorType.sort(function () {
            let random = RR.random(0, 2);
            switch (random) {
                case 0:
                    return -1;
                case 1:
                    return 0;
                case 2:
                    return 1;
            }
        });

        let actorArr = [], actorImgArr = [];

        let zhugongPosi = posiArr[0];
        let zhugongImgNum = RR.randomNotIn(1, 20, actorImgArr);
        let zhugong = new Actor(actorType[0], zhugongImgNum);
        zhugong.x = zhugongPosi.x;
        zhugong.y = zhugongPosi.y;
        actorArr.push(zhugong);
        actorImgArr.push(zhugongImgNum);

        let fanzei1Posi = posiArr[1];
        let fanzei1ImgNum = RR.randomNotIn(1, 20, actorImgArr);
        let fanzei1 = new Actor(actorType[1], fanzei1ImgNum);
        fanzei1.x = fanzei1Posi.x;
        fanzei1.y = fanzei1Posi.y;
        actorArr.push(fanzei1);
        actorImgArr.push(fanzei1ImgNum);

        let fanzei2Posi = posiArr[2];
        let fanzei2ImgNum = RR.randomNotIn(1, 20, actorImgArr);
        let fanzei2 = new Actor(actorType[2], fanzei2ImgNum);
        fanzei2.x = fanzei2Posi.x;
        fanzei2.y = fanzei2Posi.y;
        actorArr.push(fanzei2);
        actorImgArr.push(fanzei2ImgNum);

        let zhongchenPosi = posiArr[3];
        let zhongchenImgNum = RR.randomNotIn(1, 20, actorImgArr);
        let zhongchen = new Actor(actorType[3], zhongchenImgNum);
        zhongchen.x = zhongchenPosi.x;
        zhongchen.y = zhongchenPosi.y;
        actorArr.push(zhongchen);
        actorImgArr.push(zhongchenImgNum);

        let neijianPosi = posiArr[4];
        let neijianImgNum = RR.randomNotIn(1, 20, actorImgArr);
        let neijian = new Actor(actorType[4], neijianImgNum);
        neijian.x = neijianPosi.x;
        neijian.y = neijianPosi.y;
        actorArr.push(neijian);
        actorImgArr.push(neijianImgNum);

        return actorArr;
    }

}