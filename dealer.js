class Dealer {
    hand = [];
    showCards = false;

    show() {
        if (this.hand.length == 0) return;
        let gap = 20
        let len = cardWidth + gap;
        let is = [imgs.get(this.hand[0].num + this.hand[0].suit)];
        for (let i = 1; i < this.hand.length; i++) {
            len += cardWidth + gap;
            if (this.showCards) {
                is.push(imgs.get(this.hand[i].num + this.hand[i].suit))
            } else {
                is.push(imgs.get('back'));
            }
        }
        let x = (width / 2) - (len / 2)
        for (let i = 0; i < this.hand.length; i++) {
            image(is[i], x + ((cardWidth + gap) * i), 50, cardWidth, cardHeight)
        }
    }

    go() {
        let sum = Deck.sumHand(this);
        while (sum < 16) {
            deck.get(d, 1);
            sum = Deck.sumHand(this);
        }
        state = 3;
    }
}