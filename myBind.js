//cat.meow.bind(cat1)
Function.prototype.myBind = function(myObject) {
  var that = this;
  return function() {
    that.apply(myObject, []);
  }
};

// `times` is the same:
function times(num, fun) {
  for (var i = 0; i < num; i++) {
    fun(); // call is made "function-style"
  }
}

var cat = {
  age: 5,

  age_one_year: function () {
    this.age += 1;
  }
};

// Function argument is different:
// console.log(cat.age_one_year.apply(cat, []));
// times(10, cat.age_one_year.apply(cat, []));
times(10, cat.age_one_year.myBind(cat));
console.log(cat.age);