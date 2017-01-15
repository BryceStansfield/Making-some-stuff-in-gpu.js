window.onload = function(){
	gpu = new GPU();

	var circle = gpu.createKernel(function(radius, tolerance) {			// Midpoint algorithm be damned!
		this.color(255,255,255);
		var distance = Math.pow(Math.pow(this.thread.x - this.dimensions.x/2, 2) + Math.pow(this.thread.y - this.dimensions.y/2, 2), 0.5);
		if(distance > radius - tolerance && distance < radius + tolerance){
			this.color(0,0,0);
		}
	}).dimensions([1000, 1000]).graphical(true);
	    
	circle(400, 5);

	var canvas = circle.getCanvas();
	document.getElementsByTagName('body')[0].appendChild(canvas);
}