class RR {

    public static random(min: number, max: number): number {
        return min + Math.floor(Math.random() * (max - min + 1));
    }


    public static randomNotIn(min: number, max: number, nums: number[]): number {
        let num = RR.random(min, max);
        for (let i = 0; i < nums.length; i++) {
            if (num == nums[i])
                return RR.randomNotIn(min, max, nums);
        }
        return num;
    }

    public static each(arr: any[], fun: Function): void {
        for (let i = 0; i < arr.length; i++) {
            fun(arr[i], i, arr);
        }
    }

}