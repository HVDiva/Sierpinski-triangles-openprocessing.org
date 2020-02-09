function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	x1 = windowWidth/2
	y1 = windowHeight/2 - 250
	x2 = x1 - 300
	y2 = y1 + 300
	x3 = x1 + 300
	y3 = y1 + 300
}

function draw() {
	triangle(x1, y1, x2, y2, x3, y3)
	draw3triangles(x1, y1, x2, y2, x3, y3, 0, 0, 0)
}


function draw3triangles(x1, y1, x2, y2, x3, y3, j, k, l) {
	i = 0;
	while (i < 7 && j < 7){
		var xx1 = (x1+x2)/2;
 		var yy1 = (y1+y2)/2;
  	var xx2 = (x2+x3)/2;
  	var yy2 = (y2+y3)/2;
  	var xx3 = (x3+x1)/2;
  	var yy3 = (y3+y1)/2;
  	line(xx1,yy1,xx2,yy2);
  	line(xx3,yy3,xx2,yy2);
  	line(xx1,yy1,xx3,yy3);
  	draw3triangles(x1,y1,xx1,yy1,xx3,yy3, j+2, k, l);
		draw3triangles(x2,y2,xx1,yy1,xx2,yy2, j+2, k+2, l);
  	draw3triangles(x3,y3,xx3,yy3,xx2,yy2, j+2,k+2, l+2);
		j = j + 1;
		i = i + 1;
		k = k + 1;
		l = l + 1;
	}
}