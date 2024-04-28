// SRP
//bad
class Conversation {
    public sendMessage() {

    }

    public sendComment() {

    }
}

// good
interface SendContent {
    send(): string;
}

class MessageConversation implements SendContent {
    send(): string {
        return "";
    }
}

class CommentConversation implements SendContent {
    public send(): string {
        return "";
    }
}



// OCP
class TaxCalculate {
    price: number;

    constructor(price: number) {
        this.price = price;
    }

    calculate(): number {
        return this.price * (10 / 100);
    };

    getPrice(): number {
        return this.price;
    }
}

class VNTaxCalculate extends TaxCalculate {
    calculate(): number {
        return this.getPrice() * (15 / 100);
    }
}

class JPTaxCalculate extends TaxCalculate {
    calculate(): number {
        return this.getPrice() * (20 / 100);
    }
}

//LSP 
class Ads {
    fee: number;

    constructor(fee: number) {
        this.fee = fee;
    }

    calculateFee(): number {
        return this.getFee() * 2;
    }

    getFee() {
        return this.fee;
    }
}

class FacebookAds extends Ads {
    calculateFee(): number {
        return this.getFee() * 2;
    }
}

function getAdsFee(ads: Ads) {
    return ads.calculateFee();
}

const commonAds = new Ads(100);
const facebookAds = new FacebookAds(200);

console.log("Fee " + getAdsFee(commonAds));
console.log("Fee " + getAdsFee(facebookAds));

//ISP
// bad
// interface Building {
//     build(): void;
//     buildBalcony(): void;
//     buildStairs(): void;
//     installElevator(): void;
// }

//good
interface IBuilding {
    build(): void;
}

interface IBuildBalcony {
    buildBalcony(): void;
}

interface IBuildStairs {
    buildStairs(): void;
}

interface IInstallElevator {
    installElevator(): void;
}

class Apartment implements IBuilding, IBuildStairs, IInstallElevator {
    installElevator(): void {
        return;
    }

    buildStairs(): void {
        return;
    }

    build(): void {
        return;
    }
}

class TwoFloor implements IBuilding, IBuildBalcony, IBuildStairs {
    buildStairs(): void {
        return;
    }

    buildBalcony(): void {
        return;
    }

    build(): void {
        return;
    }
}

class OneFloor implements IBuilding, IBuildBalcony {
    buildBalcony(): void {
        return;
    }

    build(): void {
        return;
    }
}

//DIP 
interface IFood {
    bake(): string;
    eat(): string;
}

class Pizza implements IFood {
    bake(): string {
        return "Pizza bake";
    }

    eat(): string {
        return "Pizza eat";
    }
}

class Bread implements IFood {
    bake(): string {
        return "Bread bake";
    }

    eat(): string {
        return "Breat eat";
    }
}

class Production {
    constructor(private iFood: IFood) {
    }

    produce(): string {
        return this.iFood.bake();
    }

    consume(): string {
        return this.iFood.eat();
    }
}

const pizza = new Pizza();
const bread = new Bread();

const p1 = new Production(pizza);
console.log(p1.produce());
console.log(p1.consume());

const p2 = new Production(bread);
console.log(p2.produce());
console.log(p2.consume());
