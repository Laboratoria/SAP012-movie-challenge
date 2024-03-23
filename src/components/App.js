const App = () => {
  const cartões = document.createElement('ul');
  cartões.className = 'container_cartoes';

  // Realiza a requisição à API
  fetch('https://api.themoviedb.org/3/list/{list_id}', {method: 'GET'})
  .then(response => response.json()) 
  .then(data => {
      // Utiliza o método map() para criar um array de strings contendo o HTML de cada item
      const itensHTML = data.map(item => `
          <li itemscope itemtype="https://www.imdb.com/list/ls086959587/" class="container_li">
              <dl itemscope itemtype="https://www.imdb.com/list/ls086959587/">
                  <dt><img src="${item.imageUrl}" alt="Imagem do card" itemprop="imageUrl" class="img_card" /></dt>
                  <dt>Avaliação:</dt>
                  <dd itemprop="facts">${item.facts.doramaRating}</dd>
              </dl>
          </li>
      `);
      
      // Atualiza o conteúdo da lista <ul> com o HTML gerado pelos itens da API
      cartões.innerHTML = itensHTML.join('');
  })
  .catch(error => {
      console.error('Erro ao obter os dados da API:', error);
  });

  return cartões;
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