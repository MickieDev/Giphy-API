let ul = document.getElementById("listItems");
let trendingBtn = document.getElementById("trending");
let randomBtn = document.getElementById("random");
let clearBtn = document.getElementById("clearGifs");
let searchGiphyInput = document.getElementById("searchGiphyInput");
let form = document.querySelector("form");
let searchGif = document.getElementById("searchGif");

let apiKey= '7jvA5j9tK53ZNn0WTnJYAkE6MbESxv5C';


function LetsSearchGifs(event) {
  ul.innerHTML = "";
  let searchValue = searchGiphyInput.value;  
    
  let giphyAPI = `https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=${apiKey}&limit=10`;
  
  fetch(giphyAPI)
    .then(response => {
      return response.json();
    })
    .then(json => {
    console.log(json);
    for (var i = 0; i < json.data.length; i++) {
      var data = json.data[i].images.original.url;
      var img = document.createElement("img");
      img.src = data;
      var li = document.createElement("li");
      li.appendChild(img);
      ul.appendChild(li);
      document.body.appendChild(ul);
      searchGiphyInput.value = "";
    }
  })
    .catch(err => console.log(err));
  event.preventDefault();
}
form.addEventListener("submit", LetsSearchGifs);


function trendingGif(){
  
  ul.innerHTML = "";
  
  let giphyAPI = `https://api.giphy.com/v1/gifs/search?q=trending&api_key=${apiKey}&limit=10`;

  fetch(giphyAPI)
    .then(response => {
    return response.json();
  })
    .then(json => {
    console.log(json);
    for (var i = 0; i < json.data.length; i++) {
      var data = json.data[i].images.original.url;
      var img = document.createElement("img");
      img.src = data;
      var li = document.createElement("li");
      li.appendChild(img);
      ul.appendChild(li);
      document.body.appendChild(ul);
      searchGiphyInput.value = "";
    }
  })
    .catch(err => console.log(err));
}
trendingBtn.addEventListener('click', trendingGif);


function randomGifs(){
  ul.innerHTML = "";
  let giphyAPI = `https://api.giphy.com/v1/gifs/search?q=random&api_key=${apiKey}&limit=10`;
  
  fetch(giphyAPI)
    .then(response => {
    return response.json();
  })
    .then(json => {
    console.log(json);
    for (var i = 0; i < json.data.length; i++) {
      var data = json.data[i].images.original.url;
      var img = document.createElement("img");
      img.src = data;
      var li = document.createElement("li");
      li.appendChild(img);
      ul.appendChild(li);
      document.body.appendChild(ul);
      searchGiphyInput.value = "";
    }
  })
    .catch(err => console.log(err));
}
randomBtn.addEventListener('click', randomGifs);
