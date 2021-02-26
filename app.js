const input = document.querySelector("#search");

input.addEventListener('input', e => {
 searchImage(input.value);
})




const options = {
  headers: {
    Authorization: 'Your_api_key'
  }
}

function searchImage(query) {
  console.log(query)
  const url =
    `https://api.pexels.com/v1/search?query=${query}&per_page=30`;

  fetch(url, options)
    .then(d => d.json())
    .then(renderImages)
    .catch(e => console.error())
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
    
  }else {
    html = "no Image found"
  }
  results.innerHTML = html;
}

