(function () {
  if (typeof SSS === "undefined") {
    window.SSS = {};
  }

var Board = SSS.Board = function() {
  this.snake = new SSS.Snake();
  this.grid = [];
  this.foodPos = -1;
  this.fillGrid();
};

Board.prototype.fillGrid = function() {
  for (var i = 0; i < 20; i++) {
    this.grid.push([]);
    for (var j = 0; j < 20; j++) {
      this.grid[i].push(".");
    }
  }
};

Board.prototype.validMove = function (pos) {
  var x = pos[0];
  var y = pos[1];
  if (x < 0 || y < 0 || x > 19 || y > 19 ){
    //alert("Game Over!");
    return false;
  }
  return true;
};

Board.prototype.placeFood = function() {
  if (this.foodPos !== -1 ){
    $("li").eq(this.foodPos).removeClass("food");
  }

  var x = Math.floor(Math.random() * 20);
  var y = Math.floor(Math.random() * 20);
  var pos = SSS.Coord.calcPos([x,y]);

  var segPos = this.snake.segments.map(SSS.Coord.calcPos);
  while (segPos.indexOf(pos) !== -1) {
    x = Math.floor(Math.random() * 20);
    y = Math.floor(Math.random() * 20);
    pos = SSS.Coord.calcPos([x,y]);
  }

  //debugger
  $("li").eq(pos).addClass("food");
  this.foodPos = pos;
  return pos;
};

Board.prototype.render = function() {
  //this.snake.move();

};







})();
