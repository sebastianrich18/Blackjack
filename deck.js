class Deck {
    cards = [];

    init() {
        cradNames.forEach(n => {
            if (n.length == 3) {
                let num = n.slice(0, 2);
                let suit = n.slice(2);
                this.cards.push(new Card(num, suit))
            } else {
                this.cards.push(new Card(n.charAt(0), n.charAt(1)))
            }
        })
    }

    get(p, n) {
        for (let i = 0; i < n; i++) {
            p.hand.push(this.cards.shift());
        }
    }

    shuf() {
        this.cards = shuffle(this.cards)
    }

    hit(p) {
        p.hand.push(this.cards.shift());
    }

    static sumHand(u) {
        let sum = 0;
        u.hand.forEach(c => { sum += c.val; })
        if(sum > 21) {
            for(let i = 0; i<u.hand.length; i++) {
                if(u.hand[i].num == 'a') {
                    u.hand[i].val = 1;
                }
            }
            sum = 0;
            u.hand.forEach(c => { sum += c.val; })
        }
        return sum;
    }


}