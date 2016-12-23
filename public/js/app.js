/*jshint esversion: 6 */
(function(window){
// console.log('DADAADSALDASDMAKLDNKLANDKL');

let myData;

function reqListener() {
  reddit = document.getElementById('reddit');
  // container = document.getElementById('container');

  var myData = JSON.parse(this.responseText);
  // console.log(myData);
  myData = myData.data.children;
  // console.log('the children', myData);

  for (var i = 0; i < myData.length; i++) {
    var container = document.createElement('div');
    var outerContainer = document.createElement('div');

    reddit.appendChild(outerContainer);
    outerContainer.appendChild(container);

    container.className = 'container';
    outerContainer.className = 'outerContainer';

    var image = document.createElement('img');
    image.className = 'image';
    image.src = myData[i].data.preview.images[0].source.url;
    console.log(image);
    container.appendChild(image);

    var title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = myData[i].data.title;
    console.log(title);
    container.appendChild(title);

    var author = document.createElement('div');
    author.className = 'author';
    author.innerHTML = ' by ' + myData[i].data.author;
    console.log(author);
    container.appendChild(author);

    var date = document.createElement('div');
    date.className = 'date';
    var postedDate = (new Date(myData[i].data.created)).toString();
    console.log(postedDate);
    date.innerHTML = 'Created Date: ' + postedDate;
    container.appendChild(date);
  }
}
let oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'https://www.reddit.com/r/aww/.json');
oReq.send();

}(window));
