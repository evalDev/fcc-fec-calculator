(function() {
  var testObjects;

  testObjects = {};

  if ((typeof module !== "undefined" && module !== null) && module.exports) {
    module.exports = testObjects;
  }

  if (typeof window !== "undefined" && window !== null) {
    window.projectName = testObjects;
  }

}).call(this);
