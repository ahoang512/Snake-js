(function () {
  if (typeof SSS === "undefined") {
    window.SSS = {};
  }

  var Snake = SSS.Snake = function () {
    this.dir = "s";
    this.segments = [[0,0]];
    this.score = 0;
    this.paused = false;
  };

  //returs the next head coordinates;
  Snake.prototype.move = function () {
    for (var i = this.segments.length-1; i > 0; i--) {
      this.segments[i] = this.segments[i-1].slice();
    }
    switch(this.dir) {
      case 'n':
        this.segments[0][1]--;
        return this.segments[0];
      case 's':
        this.segments[0][1]++;
        return this.segments[0];
      case 'w':
        this.segments[0][0]--;
        return this.segments[0];
      case 'e':
        this.segments[0][0]++;
        return this.segments[0];
      default:
        break;
    }
  };

  Snake.prototype.turn = function (dir) {
    this.dir = dir;
  };

  Snake.prototype.getTailIndex = function() {
    var last = this.segments[this.segments.length - 1];
    return SSS.Coord.calcPos(last);
  };

  Snake.prototype.increaseScore = function () {
    this.score += 1;
  };


  Snake.prototype.reset = function () {
    this.dir = "s";
    this.segments = [[0,0]];
    this.score = 0;
  };

  Snake.prototype.pause = function () {
    if (this.paused){
      SSS.Coord.timer = setInterval(function() {
        view.updateBoard();
      }, 75);
      this.paused = false;
    }else {
      clearInterval(SSS.Coord.timer);
      this.paused = true;
    }
  };



})();
