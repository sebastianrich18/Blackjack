let buttons = [];
class Button {
    constructor(x, y, w, h, text, func, enabled) {
        this.text = text
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.func = func;
        this.enabled = undefined ? this.enabled = true : this.enabled = enabled
        this.enabled = true;
        buttons.push(this);
    }

    disable() { this.enabled = false; }
    enable() { this.enabled = true; }

    show() {
        fill(255);
        stroke(0)
        rectMode(CORNER)
        textSize(28);
        textAlign(CENTER)
        if (this.enabled) {
            rect(this.x, this.y, this.w, this.h);
            fill(0);
            text(this.text, this.x + (this.w / 2), this.y + (this.h / 2) + 8);
        }
    }

    pressed() {
        if (this.enabled) {
            this.func();
        }
    }

}