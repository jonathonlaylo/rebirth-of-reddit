/*jshint esversion: 6 */
(function(window){

let myData;

function reqListener() {
  reddit = document.getElementById('reddit');

  var myData = JSON.parse(this.responseText);
  myData = myData.data.children;

  for (var i = 0; i < myData.length; i++) {
    var container = document.createElement('div');
    var outerContainer = document.createElement('div');

    reddit.appendChild(outerContainer);
    outerContainer.appendChild(container);

    container.className = 'container';
    outerContainer.className = 'outerContainer';

    var image = document.createElement('div');
    image.className = 'image';
    if (myData[i].data.preview.images[0].variants.gif) {
      image.style =`background-image: url('${myData[i].data.preview.images[0].variants.gif.source.url};')`;
    } else {
      image.style = `background-image: url('${myData[i].data.preview.images[0].source.url};')`;
    }
    // console.log(image);
    container.appendChild(image);

    var title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = myData[i].data.title;
    container.appendChild(title);

    var date = document.createElement('div');
    date.className = 'date';
    var postedDate = (new Date(myData[i].data.created)).toString();
    date.innerHTML = postedDate;
    container.appendChild(date);

    var author = document.createElement('div');
    author.className = 'author';
    author.innerHTML = 'by ' + myData[i].data.author;
    container.appendChild(author);
  }
}
let oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'https://www.reddit.com/r/aww/.json');
oReq.send();

document.getElementById('random').addEventListener('click', ()=>{
  console.log('im working');
});

document.getElementById('boards').addEventListener('click', ()=>{
  console.log('im also working');
});

document.getElementById('app').addEventListener('click', ()=>{
  console.log('am i working?');
});

}(window));
