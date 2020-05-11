/// <reference path="gameobject.ts"/>

class Wheel extends HTMLElement{
                        
    constructor(car : Car, offsetCarX : number) {
        super()
        
        this.style.transform = `translate(${offsetCarX}px, 30px)`

        car.appendChild(this)
    }

    public move() : void {

    }

    public onCollision (gameobject : GameObject) : void {
        
    }
}

window.customElements.define("wheel-component", Wheel as any)