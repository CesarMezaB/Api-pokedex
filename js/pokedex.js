const fechPokemon = () =>{
    const pokeName = document.getElementById("pokeName");
    if(pokeName.value === ''){
        alert("El campo esta vacío");
       return false;
    }
    let poKeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${poKeInput}`;
    fetch(url).then((res) =>{
        if(res.status != "200"){
            console.log(res);
            pokeImage("./img/pikachu-sad.gif")
        }else{
            return res.json();
        }
    }).then((data)=>{
        console.log(data)
      let pokeImg = data.sprites.other.home.front_default;
       pokeImage(pokeImg);

        
       document.getElementsByClassName("limpiarinput")[0].value = "";
       document.getElementById('element').innerHTML  = data.name;

       let elementStats = document.getElementById("poke-stats")
       elementStats.innerHTML= `
        <li><span>Tipo: </span> ${data.types[0].type.name}</li>
        <li><span>Hp:</span> ${data.stats[0].base_stat}</li>
        <li><span>Attack:</span> ${data.stats[1].base_stat}</li>
        <li><span>Defense:</span> ${data.stats[2].base_stat}</li>
        <li><span>Special-attack:</span> ${data.stats[3].base_stat}</li>
        <li><span>Special-defense:</span> ${data.stats[4].base_stat}</li>
       `; 
        console.log(pokeImg);
       
       
    })
    
   
}


 

//fechPokemon()

const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg")
    pokeImg.src = url;
}


const imprimir = () =>{
    const pokeName = document.getElementById("pokeName");
    let poKeInput = pokeName.value;
    console.log("hoala" + poKeInput)
}




//for(let i=0; i< data.stats.length; i++){
//    console.log( data.stats[i].stat.name + data.stats[i].base_stat);
//    let element = document.getElementById("elementz")
 //    element.innerHTML = `
///     <p>${data.stats[i].stat.name + data.stats[i].base_stat}</p>
 
/// 
 //    `;
//}

