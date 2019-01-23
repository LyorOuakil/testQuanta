function logIndexTimes(a) {
  // Your code goes here
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j <= i; j++) {
      console.log(a[i]);
    }
  }
}

logIndexTimes(["je", "suis", "super", "motivé"]);
