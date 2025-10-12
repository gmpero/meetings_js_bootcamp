class Mixture {
    amountOfStrength = 0;
    amountOfAgility = 0;
    amountOfHealth = 0;

    constructor(name, objectLiquid, objectBerry) {
        this._name = name; 
        this._liquid = objectLiquid;
        this._berry = objectBerry;
        this.#mix();
    }

    get name() {
        return this._name;
    }

    get liquid() {
        return this._liquid;
    }

    get berry() {
        return this._berry;
    }


    #mix() {
        this.amountOfStrength = this.liquid.clarity * this.berry.amountOfStrength * this.berry.count;
        this.amountOfAgility = this.liquid.clarity * this.berry.amountOfAgility * this.berry.count;
        this.amountOfHealth = this.liquid.clarity * this.berry.amountOfHealth * this.berry.count;
    }
}

export default Mixture;

