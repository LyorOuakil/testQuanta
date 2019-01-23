function displayNbWordsPerLine(str, n) {
  const printNl = function(str) {
    process.stdout.write(`${str}\n`);
  };
  const printSp = function(str) {
    process.stdout.write(`${str} `);
  };
  // Your code goes here
  var start = 0;
  var space = 0;
  var nbWords = str.split(" ").length;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      space++;
      if (space == n) {
        space = 0;
        printNl(str.slice(start, i));
        start = i + 1;
      }
    }
  }
  printNl(str.slice(start));
}

// displayNbWordsPerLine(
//   "To win the digital business race, you must provide customers with a flawless online experience",
//   4
// );
