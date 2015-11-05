console.log('component has loaded');
window.onload = function() {
console.log('all files that this page needs have been loaded');







function component(domElement) {

  this.domElement = domElement;
  this.initialize = function() {
    console.log('init');
  };
  this.render = function() {
    this.domElement.src = "http://cnet4.cbsistatic.com/hub/i/2015/02/25/49752f72-14d6-4033-af9c-88d40611d3c7/5ddb05cc300e5515c348d0d60f4e9e42/eiffel1.jpg"; // <img src='imageSrc'>
    console.log('render')
  }

}


var photo = document.getElementById('photoswap');

var bed = document.getElementById('btn');
console.log('bed: ' + bed);

var comp = new component(photo);
  comp.initialize();

bed.addEventListener('click', function(event) {
  console.log(event);
  console.log('btn pushed');

comp.render();
});



};
