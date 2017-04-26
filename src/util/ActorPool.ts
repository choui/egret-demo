class ActorPool {

    public static randomActors(): Actor[] {
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


}