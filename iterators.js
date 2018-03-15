var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(obj) {
  var x = obj.x;
  var y = obj.y;
  var zSquared = (x * x) + (y * y);
  return Math.sqrt(zSquared);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);