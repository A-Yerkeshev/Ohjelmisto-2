"use strict";
const form = document.getElementById('main-form');
const output = document.getElementById('output');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('query').value.trim().toLowerCase();

  fetch(form.action + '?q=' + title)
    .then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);

      data.forEach((series) => {
        const show = series.show;

        show.image = show.image ? show.image : {'medium': 'https://via.placeholder.com/210x295?text=image+not+found'};

        const html = buildHTML(show.name, show.url, show.image.medium, show.summary, show.genres);

        output.append(html);
      });
      
    }).catch((error) => {
      output.innerText = `Error occured while fetching data: ${error}`;
    });
});

function buildHTML(name, url, imgUrl, summary, genres) {
  const div = document.createElement('div');
  div.classList.add('series-item');

  const h1 = document.createElement('h1');
  h1.innerText = name;
  const h2 = document.createElement('h2');
  h2.innerText = genres.join(' | ');
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');
  const img = document.createElement('img');
  img.setAttribute('src', imgUrl);
  img.setAttribute('alt', name);
  const p = document.createElement('p');
  p.innerHTML = summary;

  div.append(h1, h2, a, img, p);

  return div;
}

