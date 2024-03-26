const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWFkOWM0YTFiNjIyNmVjOWM0ZjY4ODkxMzQ3ODI5MyIsInN1YiI6IjY1ZjQ2N2VhMjRmMmNlMDE4NTE3ZTM5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2xJ7C9y2opxIFXqaqf3sFoN8zSXUvOSt49Esa7rZNeE'
  }
};
const App = () => {
  // Realiza a requisição à API
  fetch('https://api.themoviedb.org/3/list/8294392?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const cartoes = document.createElement('ul');
      cartoes.classList.add('container_cartoes');

      data.items.forEach(item => {
        cartoes.innerHTML += `
        <li class="container_li">
          <dl>
            <dt><img src="${item.poster_path}" alt="${item.title}" itemprop="imageUrl" class="img_card" /></dt>
            <dt>${item.release_date}</dt>
            <dt>${item.title}</dt>
          </dl>
        </li>
        `;
        console.log(cartoes);
      })
      return cartoes;
    });
};

export default App;

// const App = () => {
//     const titulo = document.createElement('h1')
//     titulo.className = 'titulo_principal'
    
//     const cartões = document.createElement('ul');
//     cartões.className = 'container_cartoes';
//     cartões.textContent = 'vai printar';
  
  
//     return cartões;
//   };
//   // Exporta a função App como padrão
//   export default App;

//     return cartões;
//   };
//   // Exporta a função App como padrão
//   export default App;

// fetch(https:api.themoviedb.org/3/list/{list_id}, {method: 'GET'})
// .then(response => response.json()) 
//   .then(App => {
//     App.forEach(itemApp => {
//         cards.innerHTML += `
//         <li itemscope itemtype="https://www.imdb.com/list/ls086959587/" class="container_li">
//           <dl itemscope itemtype="https://www.imdb.com/list/ls086959587/">
//             <dt><img src="${itemData.imageUrl}" alt="Imagem do card" itemprop="imageUrl" class="img_card" /></dt>
//             <dt>Avaliação:</dt>
//               <dd itemprop="facts">${itemData.facts.doramaRating}</dd>
//           </dl>
//         </li>`;
//       console.log(cards);
//     })
//     return cards;
//   })

//   export default App;