// Classes  类  https://github.com/mqyqingfeng/Blog/issues/232  

class Point {
    x = 0;
    y = 0;
    c!: string;
}

class BadGrtter {
    name!: string;
    readonly _name: string = 'wo';
    setName(): void {
        this.name = '123'
    }
    constructor() {
        this.setName();
    }
    err() {
        this._name = 'err'
    }
}

class Point1 {
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
        
    }
}
