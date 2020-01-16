//to start:  browser-sync start --server -f -w

let cradNames = ['as', 'ah', 'ac', 'ad', '2s', '2h', '2c', '2d', '3s', '3h', '3c', '3d', '4s', '4h', '4c', '4d', '5s', '5h', '5c', '5d', '6s', '6h', '6c', '6d', '7s', '7h', '7c', '7d', '8s', '8h', '8c', '8d', '9s', '9h', '9c', '9d', '10s', '10h', '10c', '10d', 'js', 'jh', 'jc', 'jd', 'qs', 'qh', 'qc', 'qd', 'ks', 'kh', 'kc', 'kd',]
let imgs = new Map();
let deck;
let startingMoney = 100;
let p;
let state;  // 0 = betting  1 = players turn  2 = dealers turn  3 = turn cards/check winner  4 = wait to restart
let d;
let textBox;
let winner = '';

function preload() {
    cradNames.forEach(n => {
        imgs.set(n, loadImage('/imgs/' + n + '.png'))
    });
    imgs.set('back', loadImage('/imgs/back.png'))
}

function setup() {
    frameRate(5);
    createCanvas(800, 800);
    deck = new Deck();
    p = new Player();
    d = new Dealer();
    textBox = new TextBox(width / 2 - 75, height / 2 - 35, 150, 70);
    new Button(width / 2 - 120, height / 2 + 120, 100, 50, 'hit', hit);
    new Button(width / 2, height / 2 + 120, 100, 50, 'stay', stay);
    new Button(width / 2 - 50, height / 2 - 50, 100, 100, 'restart', newRound, false);
    state = 0;
    deck.init();
    deck.shuf();
}

function draw() {
    tick();
    background(0, 180, 0);
    p.show();
    d.show();
    textBox.show();
    buttons.forEach(b => { b.show(); })
    textAlign(CENTER);
    if (state == 4) text(winner + " Wins!", width / 2, height / 2 - 100);
}

function tick() {
    switch (state) {
        case 0:
            //console.log('player bet')
            buttons.forEach(b => { b.enabled = false; })
            textBox.enabled == true;
            break;
        case 1:
            //console.log('players trun');
            buttons.forEach(b => { if (b.text != 'restart') b.enabled = true; })
            textBox.enabled = false;
            break;
        case 2:
            //console.log('dealers turn');
            d.go()
            break;
        case 3:
            if (p.didWin(d)) {
                //console.log('Player Wins!')
                winner = 'Player'
                p.money += p.bet * 2;
            } else {
                winner = 'Dealer'
                //console.log('Dealer Wins!')
            }
            state = 4;
            break;
        case 4:
            buttons.forEach(b => {
                if (b.text == 'restart') {
                    b.enabled = true;
                }
            })
    }
}

function mousePressed() {
    buttons.forEach(b => {
        if (b.x < mouseX && b.x + b.w > mouseX &&
            b.y < mouseY && b.y + b.h > mouseY) {
            b.pressed();
        }
    });
}

function hit() {
    console.log('hit');
    deck.get(p, 1);
    if (Deck.sumHand(p) > 21) {
        console.log('bust');
    }
}

function stay() {
    console.log('stay')
    state = 2;
}

function newRound() {
    state = 0;
    deck.init();
    deck.shuf();
    d.hand = [];
    p.hand = [];
    p.bet = 0;
    textBox.reset();
    d.showCards = false;
}




