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

  var gameOver = Coord.gameOver = function(){
    var g = [[1,4], [2,4], [3,4], [4,4],
              [1,5], [1,6], [1,7], [1,8],
              [2,8], [3,8], [4,8],
              [4,7], [4,6], [3,6]];
    var a = [[7,4],
             [6,5], [8,5],
             [6,6], [7,6],[8,6],
             [6,7], [8,7],
             [6,7], [8,7],
             [6,7], [8,7],
             [6,8], [8,8],
           ];
    var m = [[10,4], [11,4], [13,4], [14,4],
             [10,5], [12,5], [14,5],
             [10,6], [14,6],
             [10,7], [14,7],
             [10,8], [14,8],

           ];
    var e = [[16,4], [17,4], [18,4],
             [16,5], [16,6], [16,7], [16,8],
             [17,6], [18,6],
             [17,8], [18,8]];

    for (var i = 0; i < g.length; i++) {
      var gPos = calcPos(g[i]);
      $("li").eq(gPos).addClass("gameOver");
    }
    for (var j = 0; j < a.length; j++) {
      aPos = calcPos(a[j]);
      $("li").eq(aPos).addClass("gameOver");
    }
    for (var k = 0; k < m.length; k++) {
      mPos = calcPos(m[k]);
      $("li").eq(mPos).addClass("gameOver");
    }
    for (var l = 0; l < e.length; l++) {
      ePos = calcPos(e[l]);
      $("li").eq(ePos).addClass("gameOver");
    }


    //$("li").addClass("gameOver");
  };


})();
