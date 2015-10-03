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
    var snake = this.snake;

    key('s', function(){
      //$("li").eq(snake.getTailIndex()).removeClass("snake");
      snake.turn('s');
    });
    key('d', function(){
      //$("li").eq(snake.getTailIndex()).removeClass("snake");
      snake.turn('e');
    });
    key('w', function(){
      //$("li").eq(snake.getTailIndex()).removeClass("snake");
      snake.turn('n');
    });
    key('a', function(){
      //$("li").eq(snake.getTailIndex()).removeClass("snake");
      snake.turn('w');
    });
  };



  View.prototype.updateBoard = function() {
    $("li").eq(this.snake.getTailIndex()).removeClass("snake");
   this.snake.move();
   this.snake.segments.forEach(function(seg){
     var idx = SSS.Coord.calcPos(seg);
     $("li").eq(idx).addClass("snake");
   });
  };

  View.prototype.start = function () {
    var view = this;
    setInterval(function() {
      view.updateBoard();
    }, 150);
  };



})();
