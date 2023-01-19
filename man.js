class man{
    constructor(game,x,y){
        this.game = game;
        this.y = y;
        this.x = x;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./knight.png"), 0, 0, 62, 64, 8, 0.1,0,false,true);
        //spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
    };
    update(){

    };
    draw(ctx){
        this.animator.drawFrame(this.game.clockTick,ctx,this.x, this.y,1);
    };
}