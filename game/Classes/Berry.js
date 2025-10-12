class Berry {
    constructor(nameBerry, count = 1, amountOfStrength = 0, amountOfAgility = 0, amountOfHealth = 0) {
        this._name = nameBerry;
        this._count = count;
        this._amountOfStrength = amountOfStrength;
        this._amountOfAgility = amountOfAgility;
        this._amountOfHealth = amountOfHealth;
    }

    get name() {
        return this._name;
    }

    get count() {
        return this._count;
    }

    get amountOfStrength() {
        return this._amountOfStrength;
    }

    get amountOfAgility() {
        return this._amountOfAgility;
    }

    get amountOfHealth() {
        return this._amountOfHealth;
    }
}

export default Berry;