class Liquid {
    constructor(name, clarity) {
        this._name = name;
        this._clarity = clarity;
    }

    get name() {
        return this._name;
    }

    get clarity() {
        return this._clarity;
    }
}

export default Liquid;