
$(document).ready(function () {
    
        var pokemons="";
        for (var i = 1; i < 150; i++) {
            var card = "<div class='card' style='width: 18rem;'>";
            card +="        <img src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+i+".png'  class='card-img-top' alt='...' >";
            card +=" </div>";
            pokemons+= card
        }
        $('#pokemon').html(pokemons);

       
    
})

