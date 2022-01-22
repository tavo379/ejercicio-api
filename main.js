function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('app');
const lista = document.getElementById('list');
const title = document.getElementById('title');
const url = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=10';

fetch(url)
.then(resp =>resp.json())
.then((data) => {
  console.log(data)
  return data.map(function(personaje) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    let quote = createNode ('li');
    li.classList = "child";
    img.src = personaje.image;
    span.innerHTML = `${personaje.character}`;
    quote.innerText = `${personaje.quote}`;
    append(li, img);
    append(li, span);
    append(ul, li);
    append(lista, quote);
  })
  
})

const h1 = document.createElement('h1')
h1.innerText = "un texto simple"

title.appendChild(h1);


