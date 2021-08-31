class Spaceship {

    constructor(type) {
        this.active = false
        this.type = type;
    }

    createSpaceshipEl(type) {
        const imgEl = document.createElement('img');
        imgEl.src = `${type}-spaceship.png`;
        imgEl.style.width = "100px";
        imgEl.style.display = "block";
        imgEl.style.marginTop = "10px";
        return imgEl
    }

    show(parentEl) {

        this.spaceshipEl = this.createSpaceshipEl(this.type);
        this.spaceshipEl.style.position = "relative";
        this.spaceshipEl.style.left = "10px"
        this.spaceshipEl.style.top = "10px"

        parentEl.append(this.spaceshipEl)

        this.activateSpaceship();
    }

    activateSpaceship() {

        this.spaceshipEl.addEventListener('click', () => {

            this.active = !this.active;
            this.spaceshipEl.style.background = this.active ? "teal" : "white";

        })
    }


    moveRight() {
        if (this.active) {
            const left = parseInt(this.spaceshipEl.style.left)
            this.spaceshipEl.style.left = left + 5 + "px"
        }

    }

    moveLeft() {
        if (this.active) {
            const left = parseInt(this.spaceshipEl.style.left)
            this.spaceshipEl.style.left = left - 5 + "px"
        }
    }


    moveDown() {
        if (this.active) {
            const top = parseInt(this.spaceshipEl.style.top)
            this.spaceshipEl.style.top = top + 5 + "px"
        }
    }

    moveUp() {
        if (this.active) {
            const top = parseInt(this.spaceshipEl.style.top)
            this.spaceshipEl.style.top = top - 5 + "px"
        }
    }

}


const spaceshipList = [];

document.addEventListener('keydown', function (event) {

    if (event.key === "ArrowRight") {
        spaceshipList.forEach((spaceship) => {
            spaceship.moveRight();
        })
    }

    else if (event.key === "ArrowDown") {
        spaceshipList.forEach((spaceship) => {
            spaceship.moveDown();
        })
    }

    else if (event.key === "ArrowLeft") {
        spaceshipList.forEach((spaceship) => {
            spaceship.moveLeft();
        })
    }

    else if (event.key === "ArrowUp") {
        spaceshipList.forEach((spaceship) => {
            spaceship.moveUp();
        })
    }

})



const generateBtn = document.getElementById('generate-spaceship')
generateBtn.addEventListener('click', function () {

    const colors = ['red', 'blue', 'green']

    const spaceship = new Spaceship(colors[Math.floor(Math.random() * 3)]);
    spaceshipList.push(spaceship);
    spaceship.show(document.body)
})
