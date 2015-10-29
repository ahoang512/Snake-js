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
  for (var i = 0; i < 40; i++) {
    this.grid.push([]);
    for (var j = 0; j < 40; j++) {
      this.grid[i].push(".");
    }
  }
};

Board.prototype.validMove = function (pos) {
  var x = pos[0];
  var y = pos[1];
  if (x < 0 || y < 0 || x > 39 || y > 39 ){
    this.snake.gameOver = true;
    return false;
  }else{
    //check if it overlaps itself.
    for (var i = 1; i < this.snake.segments.length; i++) {
      if (SSS.Coord.equals(this.snake.segments[0], this.snake.segments[i])){
        return false;
      }
    }
  }
  return true;
};

Board.prototype.placeFood = function() {
  if (this.foodPos !== -1 ){
    $("li").eq(this.foodPos).removeClass("food");
  }

  var x = Math.floor(Math.random() * 40);
  var y = Math.floor(Math.random() * 40);
  var pos = SSS.Coord.calcPos([x,y]);

  var segPos = this.snake.segments.map(SSS.Coord.calcPos);
  while (segPos.indexOf(pos) !== -1) {
    x = Math.floor(Math.random() * 40);
    y = Math.floor(Math.random() * 40);
    pos = SSS.Coord.calcPos([x,y]);
  }

  $("li").eq(pos).addClass("food");
  this.foodPos = pos;
  return pos;
};

Board.prototype.reset = function () {
  $("li").removeClass();
  this.placeFood();
};

})();
