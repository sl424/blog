document.addEventListener('DOMContentLoaded', function() {
  var cx = document.querySelector("canvas").getContext("2d");

	insignia( 100, 100);
  var R = 40;
	var i = 0;
  var xp=370, yp=-300;
	var limit = 1000;
  var lastTime = null;

  cx.moveTo(xp,yp);
  cx.beginPath();

  function frame(time) {
		if ( i >= limit) { return;}
    if (lastTime != null)
      updateAnimation(Math.min(100, time - lastTime) / 1000);
    lastTime = time;
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);

  function updateAnimation(step) {
		if ( i < limit ) { 
			i++;
			//R *= 1.009;
			R *= 0.99;
			xp = xp- R * Math.cos( i* 0.1);
			yp = yp+ R * Math.sin( i * 0.1);
			cx.lineTo(xp,yp);
			cx.stroke();
		}
  }

function insignia( y, x ) {
  cx.beginPath();
  cx.moveTo(y-50 ,x+40 );
  // y, x-40
  cx.quadraticCurveTo( y, x-40, y+30, x+40 );
  cx.lineTo( y, x-40 );
  cx.closePath();
  cx.stroke();
}

});
