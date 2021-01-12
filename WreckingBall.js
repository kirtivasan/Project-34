class Ball
{
	constructor(x,y,w,h,angle)
	{
		var options={
			density:1,
			frictionAir:0.005
			}
		
        
		this.body=Bodies.rectangle(x, y, w, h , options);
		this.w=w;
		this.h=h;
	    this.image = loadImage("images/Superhero-01.png");
 		World.add(world, this.body);

	}
	display()
	{
		this.body.position.x = mouseX;
		this.body.position.y = mouseY;
		var angle=this.body.angle;	
		
		push();
		translate(this.body.position.x, this.body.position.y);
		rotate(angle);
		imageMode(CENTER);
		image(this.image, 0, 0, this.w, this.h);
		pop();
		  
			
	}

}