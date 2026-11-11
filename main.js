fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    personajes = data.results;
    mostrarPersonajes(personajes);
  })
  .catch(error => {
    console.error('Error al cargar los personajes:', error);
  });

  let personajes = [];


let contenedor = document.getElementById('mainContainer');
let searchInput = document.getElementById('searchInput');




function mostrarPersonajes(listaPersonajes) {
  contenedor.innerHTML = '';

  listaPersonajes.forEach(personaje => {
    contenedor.innerHTML += `
      <div class="card">
        <img src="${personaje.image}" alt="${personaje.name}">
        <h2>${personaje.name}</h2>
        <p>Especie: ${personaje.species}</p>
        <p>Estado: ${personaje.status}</p>
      </div>
    `;
  });
}


searchInput.addEventListener('input', () => {
  let searchTerm = searchInput.value.toLowerCase();

  let filteredPersonajes = personajes.filter(personaje =>
    personaje.name.toLowerCase().includes(searchTerm)
  );

  mostrarPersonajes(filteredPersonajes);
});
