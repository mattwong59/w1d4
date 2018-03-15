var wrapLog = function (callback, name) {

  var nme = arguments[1]
  return function () {
    var args_array = [].slice.call(arguments);
    var x = args_array[0]
    var y = args_array[1]
    var z = args_array[2]
    var answer = callback(x,y,z);
    console.log(`${nme} (${buildString(args_array)}) => ${answer}`);
  }
};

function buildString (args) {
  var str = "";
  str += args[0];
  for (var i = 1; i < args.length; i++) {
    if (args[i] > 0) {
      str += ", " + args[i];
    }
  }
  return str;
}

var area = function (x, y) {
  return x * y;
};

var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};

var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24
