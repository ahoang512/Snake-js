
var segments = [ [0,0] , [0,1] , [0,2] ];

for (var i = segments.length-1; i > 0 ; i--) {
  segments[i] = segments[i -1].slice();
}


var dir = 'N';

switch(dir) {
  case 'N':
    segments[0][1]--;
    break;
  case 'S':
    segments[0][1]++;
    break;
  case 'W':
    segments[0][0]--;
    break;
  case 'E':
    segments[0][0]++;
    break;
  default:
    break;
}

console.log(segments);
