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
    for (var i = 0; i < 1600; i++) {
      if (y === 1600) {y = 0;}
      if ( i % 40 === 0){
        x++;
      }
      var li = $("<li></li>");
      li.data("pos", [x, y]);
      this.$el.append(li);
      y++;
    }
    this.board.placeFood();
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
      if ('n' !== snake.dir){
        snake.turn('s');
      }
    });
    key('d', function(){
      if ('w' !== snake.dir){
        snake.turn('e');
      }
    });
    key('w', function(){
      if ('s' !== snake.dir) {
        snake.turn('n');
      }
    });
    key('a', function(){
      if ('e' !== snake.dir){
        snake.turn('w');
      }
    });
    key('down', function(){
      if ('n' !== snake.dir){
        snake.turn('s');
      }
    });
    key('right', function(){
      if ('w' !== snake.dir){
        snake.turn('e');
      }
    });
    key('up', function(){
      if ('s' !== snake.dir) {
        snake.turn('n');
      }
    });
    key('left', function(){
      if ('e' !== snake.dir){
        snake.turn('w');
      }
    });
    key('space', function() {
      this.snake.pause();
    }.bind(this));

    key('enter', function() {
      if (this.snake.gameOver){
        this.board.reset();
        this.snake.reset();
        this.start();
      }

    }.bind(this));



  };



  View.prototype.updateBoard = function() {
    $("li").eq(this.snake.getTailIndex()).removeClass("snake");
    //save tail position, incase we want to increase length;
    var segs = this.snake.segments;
    var tail = segs[segs.length - 1 ];

    //get the head posiiton one snake has moved.
    var head = this.snake.move();
    var headPos = SSS.Coord.calcPos(head);

   if (!this.board.validMove(head)){
     clearInterval(SSS.Coord.timer);
     this.finalScore();
     SSS.Coord.gameOver();
   }else {
     if (headPos === this.board.foodPos){
       //console.log("food!");
       this.board.placeFood();
       this.snake.segments.push(tail);
       this.snake.increaseScore();
       this.updateScore();
     }

     this.snake.segments.forEach(function(seg){
       var idx = SSS.Coord.calcPos(seg);
       $("li").eq(idx).addClass("snake");
     });
   }
  };


  View.prototype.start = function () {
    var view = this;
    this.updateScore();
    SSS.Coord.timer = setInterval(function() {
      view.updateBoard();
    }, 50);
  };

  View.prototype.updateScore = function () {
    $("#score").text(this.snake.score.toString());
  };

  View.prototype.finalScore = function () {
    $("#score").text("Score: " + this.snake.score.toString() + " Press Enter to Play Again");
  };



})();
