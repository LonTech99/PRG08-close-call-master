class Game {

    // Fields
    private cars    : Car[]     = []
    private rocks   : Rock[]    = []
    private score   : number    = 0
    private request : number    = 0
    private gameover: boolean   = false
    private gameObjects : GameObject[] = []


    constructor() {
            for(let i = 0 ; i < 6 ; i++) {
            this.addCarWithRock(i)
        }

        this.gameLoop()
    }

    private addCarWithRock(index : number) {
        this.gameObjects.push(new Car(index, this))
        this.gameObjects.push(new Rock(index))
    }

    private gameLoop() : void{
        for (const gameObject of this.gameObjects) {
            gameObject.move()
        }

        this.checkCollision()
        
        this.request = requestAnimationFrame(() => this.gameLoop())
    }

    private checkCollision() : void {
        for(const carGameObject of this.gameObjects) {
            if (carGameObject instanceof Car)
                for(const rockGameObject of this.gameObjects) {
                    if (rockGameObject instanceof Rock)
                    if(carGameObject.hasCollision(rockGameObject)) {
                    carGameObject.onCollision(carGameObject)
                    rockGameObject.onCollision(carGameObject)
                    this.gameOver()
                    }
                }
        }
    }

    private gameOver() : void{
        this.gameover = true
        document.getElementById("score").innerHTML = "Game Over"
        cancelAnimationFrame(this.request)
    }

    public addScore(x : number) : void{
        if(!this.gameover) {
            this.score += Math.floor(x)
            this.draw()
        }
    }

    private draw() : void{
        document.getElementById("score").innerHTML = "Score : "+this.score
    }
} 

// load
window.addEventListener("load", () => new Game() )