abstract class GameObject extends HTMLElement{

    private x       : number    = 0
    private y       : number    = 0

    public get X()      : number    { return this.x    }

    public set X(value  : number)   { this.x = value   }

    public get Y()      : number    { return this.y    }

    public set Y(value  : number)   { this.y = value   }

    public get width()  : number    { return this.clientWidth }

    public get height() : number    { return this.clientHeight }

    constructor(){
        super()

    }

    abstract onCollision (gameObject: GameObject) : void

    public hasCollision(gameObject : GameObject) : boolean {
        return (gameObject.X < this.X + this.width &&
            gameObject.X + gameObject.width > this.X &&
            gameObject.Y < this.Y + this.height &&
            gameObject.Y + gameObject.height > this.Y)
    }

    public move() : void{
        
        this.draw()
    }

    protected draw() : void {
        this.style.transform =`translate(${this.X}px,${this.Y}px)`
    }


}

window.customElements.define("gameobject-component", GameObject as any)