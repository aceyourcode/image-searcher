


const input = document.querySelector("#search");

input.addEventListener('input', e => {
 searchImage(input.value);
})




const options = {
  headers: {
    Authorization: '563492ad6f91700001000001ea4261c9c1294df5859712cf65790ad8'
  }
}

function searchImage(query) {
  console.log(query)
  const url =
    `https://api.pexels.com/v1/search?query=${query}&per_page=30`;

  fetch(url, options)
    .then(d => d.json())
    .then(renderImages)
    
}

function renderImages({ photos }) {
  const results = document.querySelector('.results');
  let html = '';
  if (photos.length) {
    photos.forEach(({ src }) => {
      html +=     ` 
        <img src="${src.medium}"></img>
        `
    })
  }
  results.innerHTML = html;
}

