var a = function () {
  function setup() {
    var setup ='aaa';
    alert(setup);
  }
  function work() {
    alert('work');
  }
  setup();
  return work;
}();

a();