function keyPressed() {
    if (textBox.text == "Place Bet") {
        textBox.text = '';
    }
    if (keyCode == BACKSPACE) {
        textBox.text = textBox.text.substring(0, textBox.text.length - 1);
    } else if (keyCode >= 48 && keyCode <= 57 && textBox.text.length < 5) {
        textBox.text += key;
    }
    if (parseInt(textBox.text) <= p.money) {
        if (keyCode == ENTER) {
            textBox.bet();
        }
    } else {
        textBox.reset();
    }
} 

class TextBox {
    constructor(x, y, w, h, enabled) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.enabled == undefined ? this.enabled = true : this.enabled = enabled;
    }
    text = "Place Bet";

    show() {
        stroke(0);
        textSize(28);
        fill(255);
        textAlign(CENTER);
        if (this.enabled) {
            rect(this.x, this.y, this.w, this.h);
            fill(0);
            text(this.text, this.x + (this.w / 2), this.y + (this.h / 2) + 8);
        }
    }

    bet() {
        p.bet = parseInt(this.text)
        p.money -= parseInt(this.text)
        this.enabled = false;
        state = 1;
        deck.get(p, 2);
        deck.get(d, 2);
    }

    reset() {
        this.text = "Place Bet"
        this.enabled = true;
    }


}