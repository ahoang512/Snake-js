(function () {
  if (typeof SSS === "undefined") {
    var SSS = window.SSS = {};
  }

  var Snake = SSS.Snake = function () {
    this.dir = "S";
    this.segments = [[0,0]];
  };

  Snake.prototype.move = function () {
    for (var i = this.segments.length-1; i > 0; i--) {
      this.segments[i] = this.segments[i-1].slice();
    }
    switch(this.dir) {
      case 'N':
        this.segments[0][1]--;
        break;
      case 'S':
        this.segments[0][1]++;
        break;
      case 'W':
        this.segments[0][0]--;
        break;
      case 'E':
        this.segments[0][0]++;
        break;
      default:
        break;
    }
    console.log(this.segments);
  };

  Snake.prototype.move = function () {

  };

})();
