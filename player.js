class Player {
    hand = [];
    money = startingMoney;
    bet = 0;


    show() {
        textAlign(LEFT)
        textSize(32);
        fill(255);
        text("Your bet: " + this.bet, 570, 780)
        text("Money: " + this.money, 20, 780)
        if (this.hand.length == 0) return;
        let gap = 20
        let len = 0;
        let is = [];
        for (let i = 0; i < this.hand.length; i++) {
            is.push(imgs.get(this.hand[i].num + this.hand[i].suit)); //put images into array
            len += cardWidth + gap;
        }
        let x = (width / 2) - (len / 2)
        for (let i = 0; i < this.hand.length; i++) {
            image(is[i], x + ((cardWidth + gap) * i), 580, cardWidth, cardHeight);
        }
    }

    didWin(d) {
        d.showCards = true;
        if(Deck.sumHand(this) < 21) {
            console.log('player bust');
            return false;
        } else if(Deck.sumHand(d) < 21 ) {
            console.log('dealer bust');
            return true;
        } else if(Deck.sumHand(this) > Deck.sumHand(d)) {
            console.log('player beats dealer');
            return true;
        } else {
            console.log('other win');
            return false;
        }
    }


}