class Obstacle {
    constructor(gameScren) {
        this.gameScren = gameScren;
        this.left = Math.round(Math.random() * 300 + 70);
        this.top = 0;
        this.width = 100;
        this.height = 150;
        this.element = document.createElement('img');
        this.element.src = './images/redCar.png';
        this.element.style.position = 'absolute';
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
        this.gameScren.appendChild(this.element);
    }
    move() {
        this.top += 3;
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
    }
}