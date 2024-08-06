//sprites
class Sprite extends Object
{
    constructor(x,y,w,h){
        super(x,y,w,h);
    }

    movement() {
        if(playKey("w")) {
            this.y -= 5;
        }
        if(playKey("a")) {
            this.x -= 5;
        }
        if(playKey("s")) {
            this.y += 5;
        }
        if(playKey("d")) {
            this.x += 5;
        }
    }
}