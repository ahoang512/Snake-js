(function () {
  if (typeof SSS === "undefined") {
    window.SSS = {};
  }

  var View = SSS.View = function (board, el) {
    this.board = board;
    this.snake = board.snake;
    this.$el = $(el);
    this.setupBoard();
    this.placeSnake();
    this.bindEvents();
  };


  View.prototype.setupBoard = function () {
    var x = -1;
    var y = 0;
    for (var i = 0; i < 400; i++) {
      if (y === 400) {y = 0;}
      if ( i % 20 === 0){
        x++;
      }
      var li = $("<li></li>");
      li.data("pos", [x, y]);
      this.$el.append(li);
      y++;
    }
  };

  View.prototype.placeSnake = function () {
    var $li = $("li").first();
    $li.addClass("snake");

  };

  View.prototype.bindEvents = function () {
    var el = this.$el;
    var that = this;
  //  el.on("click", function (event) {
    key('s', function(){
      var last = that.snake.segments[that.snake.segments.length - 1];
      var idx = that.calcPos(last);
      $("li").eq(idx).removeClass("snake");
      that.snake.move();
      that.updateBoard();
    });
    //};
  };

  View.prototype.updateBoard = function () {
   var last = this.snake.segments[this.snake.segments.length - 1];
   var idx = this.calcPos(last);
   $("li").eq(idx).addClass("snake");

  };

  View.prototype.calcPos = function(pos) {
    return pos[0] + 20 * pos[1];
  };

})();
