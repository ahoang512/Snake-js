(function () {
  if (typeof SSS === "undefined") {
    window.SSS = {};
  }


var Board = SSS.Board = function() {
  this.snake = new SSS.Snake();
  this.grid = [];

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


Board.prototype.render = function() {

};





})();
