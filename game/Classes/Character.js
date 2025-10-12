class Character {
    constructor(name, strength, agility, health) {
        this._name = name;
        this._strength = strength;
        this._agility = agility;
        this._health = health;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get strength() {
        return this._strength;
    }

    set strength(value) {
        this._strength = value;
    }

    get agility() {
        return this._agility;
    }

    set agility(value) {
        this._agility = value;
    }

    get health() {
        return this._health;
    }

    set health(value) {
        this._health = value < 0 ? 0 : value;
    }

    // Нанести удар
    causeAttack(object) {
        if (!this.getFortune() || !this.getFortune()) return false;

        let damage = this.strength;
        object.health = object.health - damage; 
        console.log(`${this.name} наносит удар в ${damage} единиц`);
    }

    // Получить состояние персонажа
    getFortune() {
        return this.health > 0;
    }

    showInfo() {
        return `${this.name} → Strength: ${this.strength}, Agility: ${this.agility}, Health: ${this.health}`
    }

    startAutofight(object) {
        while (this.getFortune() && object.getFortune()) {
            if(this.willStartFirst(object)) {
                console.log(`---`);
                this.causeAttack(object);
                object.causeAttack(this);
                console.log(`---\n`);
            }else{
                console.log(`---`);
                object.causeAttack(this);
                this.causeAttack(object);
                console.log(`---\n`);
            } 
        }
        this.showBattleResult(object);
    }

    willStartFirst(object) {
        return this.agility > object.agility;
    }

    showBattleResult(object) {
        if(!object.getFortune()) {
            console.log('Ура победа!')
        }
        if(!this.getFortune()) {
            console.log('Поражение!')
        }
    }
}

const person1 = new Character('Halk', 11, 4, 100);
const person2 = new Character('Ironman', 10, 5, 100);
person1.startAutofight(person2);


// console.log(person2.showInfo());
// person1.causeAttack(person2);
// console.log(person1);
// console.log(person2.showInfo());

export default Character;