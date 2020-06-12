const pokemones = POKEMON.pokemon;
const btnPoke = document.getElementById('btnPoke');
console.log(pokemones);

function allPokes(pokes) {
      const result = document.getElementById('result');
      result.innerHTML = `${pokes.map((pokemon)=>`
      <div class="cont-Pokemones">
            <img src="${pokemon.img}">
                  <div class="cont-datas">
                        <div class=data1>
                              <p class"p-id">Id: ${pokemon.id}</p>
                              <p class"p-num">Numero: ${pokemon.num}</p>
                              <p class"p-name">Nombre: ${pokemon.name}</p>
                              <p class"p-type">Tipo: ${pokemon.type}</p>
                              <p class"p-condicion">Altura: ${pokemon.height}</p>
                              <p class"p-weight">Peso: ${pokemon.weight}</p>
                              <p class"p-cobra">Dulce: ${pokemon.candy}</p>
                              <p class"p-cobra">Contador de Dulce: ${pokemon.candy_count}</p>
                        </div>
                              
                        <div class=data2>
                              <p class"p-cobra">Huevo: ${pokemon.egg}</p>
                              <p class"p-cobra">Opor. Engendrar${pokemon.spawn_chance}</p>
                              <p class"p-cobra">Engendra avh: ${pokemon.avg_spawns}</p>
                              <p class"p-cobra">Engendrar tiempo: ${pokemon.spawn_time}</p>
                              <p class"p-cobra">Multiplicadoras: ${pokemon.multipliers}</p>
                              <p class"p-cobra">Debilidades: ${pokemon.weaknesses}</p>
                        </div>
                  </div>
      </div>
      `)}
`;
}
allPokes(pokemones);

function search(pokes, key, name) {
      return pokes.filter(e => e[key].includes(name));
}

btnPoke.addEventListener('click', (e)=>{

allPokes(search(pokemones,"name", txtPoke.value.charAt(0).toUpperCase() + txtPoke.value.slice(1)));

txtPoke.value="";


});