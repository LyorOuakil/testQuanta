function anagram(a, b) {
  // Your code goes here
  if (a.length !== b.length) {
    return false;
  }

  var sorta = a
    .split("")
    .sort()
    .join("");
  var sortb = b
    .split("")
    .sort()
    .join("");

  return sorta === sortb;
}

// console.log(anagram("dog", "god"));
// console.log(anagram("foo", "bar"));
