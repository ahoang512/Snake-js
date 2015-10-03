(function () {
  if (typeof SSS === "undefined") {
    window.SSS = {};
  }


  var Coord = SSS.Coord = {};

  var plus = Coord.plus = function (src, dest) {
    // body...
  };

  var equals = Coord.equals = function (src, dest) {
    // body...
  };

  var isOpposite = Coord.isOpposite = function (src, dest) {
    // body...
  };

  var calcPos = Coord.calcPos = function(pos) {
    return pos[0] + 20 * pos[1];
  };


})();
