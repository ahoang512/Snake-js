(function () {
  if (typeof SSS === "undefined") {
    window.SSS = {};
  }


  var Coord = SSS.Coord = {};

  var plus = Coord.plus = function (src, dest) {
    // body...
  };

  var equals = Coord.equals = function (src, dest) {
    return (src[0] === dest[0]) && (src[1] === dest[1]);
  };

  var isOpposite = Coord.isOpposite = function (src, dest) {
    // body...
  };

  var calcPos = Coord.calcPos = function(pos) {
    return pos[0] + 40 * pos[1];
  };

  var gameOver = Coord.gameOver = function(){

  };


})();
