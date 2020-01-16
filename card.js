cardWidth = 100;
cardHeight = 150;
class Card {
    constructor(num, suit) {
        this.num = num;
        this.suit = suit;
        this.img = imgs.get(this.num + this.suit)
        if (num == 'j' || num == 'q' || num == 'k') {
            this.val = 10;
        } else if(num == 'a') {
            this.val = 11;
        } else {
            this.val = parseInt(num);
        }
    }
}
