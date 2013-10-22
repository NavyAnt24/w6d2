var crazyBubbleSort = function(arr, sortCompletionCallback) {
  var readline = require('readline');
  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  var askLessThan = function(el1, el2, callback) {
    reader.question("Is " + el1 + " <= " + el2 + "? YES or NO? ", function (answer) {
      var lessThan = answer;
      if (lessThan === "YES"){
        callback(true);
      } else {
        callback(false);
      }
    });
  }

  var performSortPass = function(arr, i, madeAnySwaps, callback){
    if (i < arr.length - 1){
      askLessThan(arr[i], arr[i+1], function(lessThan) {
        if (lessThan === false){
          firstEl = arr[i];
          secondEl = arr[i+1];
          arr[i] = secondEl;
          arr[i+1] = firstEl;
          performSortPass(arr, i+1, true, callback);
        } else if (lessThan === true) {
            performSortPass(arr, i+1, madeAnySwaps, callback);
        }
      });
    } else if (i === arr.length - 1) {
        callback(madeAnySwaps);
    }
  }

  var sortPassCallback = function(madeAnySwaps) {
    if (madeAnySwaps === true){
      performSortPass(arr, 0, false, sortPassCallback);
    } else if (madeAnySwaps === false) {
      sortCompletionCallback(arr);
    }
  }

  sortPassCallback(true);
};

crazyBubbleSort([3,2,1,4,2,1,5], function (arr) { console.log(arr) });