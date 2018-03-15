var words = ["ground", "control", "to", "major", "tom"];

function map (array, cb) {
  var result = [];
  array.forEach(function(word) {
    result.push(cb(word));
  })
  console.log(result);
};



map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

