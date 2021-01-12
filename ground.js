class ground
{
	constructor(x,y,w,h)
	{
		var options={
		isStatic:true	
			}
	this.w=w;
	this.h=h;
        
		this.ground=Bodies.rectangle(x,y,w,h, options);
 		World.add(world, this.ground);

	}
	display()
	{
			var pos= this.ground.position;
			fill("blue");
			rectMode(CENTER);
            strokeWeight(0);
			rect(pos.x,pos.y,this.w,this.h);
			
	}

}