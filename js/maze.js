var canvas = document.getElementById('maze');
var c=canvas.getContext('2d');
var x=286;
    var y=1;
var interval = setInterval(drawIt, 1);
    function drawIt() {
        c.fillStyle = "#d4f1f9";
        c.fillRect(x,y,28,28);
        if(x==286&&y<=130)
			y++;
        if(x>=247&&x<=286&&y==130)
			x--;
        if(x==248&&y<=130&&y>=89)
			y--;
        if(y==89&&x<=248&&x>=168)
			x--;
        if(x==168&&y>=89&&y<=169)
			y++;
        if(y==169&&x<=168&&x>=129)
			x--;
        if(x==129&&y>=169&&y<=208)
			y++;
        if(y==208&x>=129&&x<=168)
			x++;
		if(x==168&&y>=208&&y<=247)
			y++;
		if(y==247&&x<=168&&x>=129)
			x--;
		if(x==129&&y>=247&&y<=286)
			y++;
		if(y==286&x>=129&&x<=168)
			x++;
		if(x==168&&y>=286&&y<=325)
			y++;
		if(y==325&&x<=168&&x>=129)
			x--;
		if(x==129&&y>=325&&y<=364)
			y++;
		if(y==364&x>=129&&x<=286)
			x++;
		if(x==286&&y>=364&&y<=483)
			y++;
		if(y==483&x>=286&&x<=443)
			x++;
		if(x==443&&y>=483&&y<=561)
			y++;
		if(y==561&&x<=443&&x>=365)
			x--;
		if(x==365&&y<=561&&y>=522)
			y--;
		if(y==522&&x<=365&&x>=326)
			x--;
		if(x==326&&y>=522&&y<=561)
			y++;
		if(y==561&&x<=326&&x>=287)
			x--;
		if(x==287&&y>=561&&y<=567)
			y++;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	