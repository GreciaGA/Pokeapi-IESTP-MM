const pokemones = POKEMON.pokemon;
const txtPoke = document.getElementById('txtPoke');
console.log(pokemones);

function allPokes(pokes) {
      const result = document.getElementById('result');
      result.innerHTML = `${pokes.map((pokemon)=>`
            <div class="cont-Pokemones">
                  <p class"p-id">${pokemon.id}</p>
                  <p class"p-num">${pokemon.num}</p>
                  <p class"p-name">${pokemon.name}</p>
                  <div class"div-img">${pokemon.img}</div>
                  <p class"p-type">${pokemon.type}</p>
                  <p class"p-condicion">${pokemon.height}</p>
                  <p class"p-weight">${pokemon.weight}</p>
                  <p class"p-cobra">${pokemon.candy}</p>
                  <p class"p-cobra">${pokemon.candy_count}</p>
                  <p class"p-cobra">${pokemon.egg}</p>

            </div>
      `)}
`;
}
allPokes(pokemones);

function search(pokes, key, name) {
      return pokes.filter(e => e[key].includes(name));
}

txtPoke.addEventListener('input', (e)=>{

allPokes(search(pokemones,"name", txtPoke.value.charAt(0).toUpperCase() + txtPoke.value.slice(1)));
});