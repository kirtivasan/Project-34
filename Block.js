class Block
{
	constructor(x,y,w,h)
	{
		var options={
			restitution:0.4,
			density:0.04,
			friction:1.0,	
			}
		
        
		this.body=Bodies.rectangle(x, y, w, h , options);
		this.w=w;
        this.h=h;
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;	
			var angle=this.body.angle;	

			push();
			fill("yellow");
			translate(pos.x, pos.y);
			strokeWeight(0);
			rectMode(CENTER);
			rect(0,0,this.w, this.h);
			pop();
			
	}

}