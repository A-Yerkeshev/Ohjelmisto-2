"use strict";
const form = document.getElementById('main-form');
const output = document.getElementById('output');
const modal = document.getElementById('modal');
const closeBtn = modal.getElementsByClassName('btn-close')[0];
const iframe = modal.getElementsByTagName('iframe')[0];

closeBtn.addEventListener('click', (event) => {
  closeDetails();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('query').value.trim().toLowerCase();

  fetch(form.action + '?q=' + title)
    .then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      output.innerHTML = '';

      if (data.length === 0) {
        output.innerText = 'No results found.';
        return;
      }
      
      data.forEach((series) => {
        const show = series.show;

        show.image = show.image ? show.image : {'medium': 'https://via.placeholder.com/210x295?text=Image+not+found'};

        const html = buildHTML(show.name, show.url, show.image.medium, show.summary, show.genres);

        output.append(html);
      });
      
    }).catch((error) => {
      output.innerText = `Error occured while fetching data: ${error}`;
    });
});

function buildHTML(name='Name is missing', url='#', imgUrl='', summary='Series description is missing.', genres=[]) {
  const container = document.createElement('div');
  container.classList.add('series-item');

  const h1 = document.createElement('h1');
  h1.innerText = name;

  const content = document.createElement('div');
  content.classList.add('item-content');

  const h2 = document.createElement('h2');
  h2.innerText = genres.join(' | ');
  const img = document.createElement('img');
  img.setAttribute('src', imgUrl);
  img.setAttribute('alt', name);
  const br = document.createElement('br');
  const a = document.createElement('a');
  a.innerText = 'Details';
  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');
  const p = document.createElement('p');
  p.innerHTML = summary;

  a.addEventListener('click', (event) => {
    event.preventDefault();
    showDetails(event.currentTarget.href);
  });

  content.append(h2, img, br, a, p);
  container.append(h1, content)

  return container;
}

function showDetails(url) {
  modal.showModal();
  iframe.setAttribute('src', url);
}

function closeDetails() {
  modal.close();
  iframe.setAttribute('src', '');
}

