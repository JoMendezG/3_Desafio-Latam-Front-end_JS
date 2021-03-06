// Variables para localizar el DOM por id
// Variable que identifica todo el formulario
const formulario = $("#formulario");
const inputForm = $("#inputSuperHero");

// función para cargar la informcación del super heroe
function renderSuperhero(superHero) {
    // Genero mis variables constantes que guardarán el id del DOM
    const imagenSH = $("#imgSuperHero");
    const nombre = $("#nombre");
    const publicacion = $("#publicadoX");
    const ocupacion = $("#ocupacion");
    const aparicion = $("#aparicion");
    const altura = $("#altura");
    const peso = $("#peso");
    const alianza = $("#alianza");

    // Conecto las variables con el DOM
    imagenSH.attr("src", superHero.image.url);
    nombre.html(superHero.name);
    publicacion.html(superHero.biography.publisher);
    ocupacion.html(superHero.work.occupation);
    aparicion.html(superHero.biography["first-appearance"]);
    altura.html(
        `${superHero.appearance.height[0]} - ${superHero.appearance.height[1]}`
    );
    peso.html(
        `${superHero.appearance.weight[0]} - ${superHero.appearance.weight[1]}`
    );
    alianza.html(superHero.biography.aliases.join(" - "));
}

// Función para crear el gráfico
function renderSuperheroChart(superhero) {
    const options = {
        title: {
            text: `Estadísticas de Poder para ${superhero.name}`,
        },
        // Colocamos la información del gráfico
        data: [{
            type: "pie",
            dataPoints: [{
                    label: "Inteligencia",
                    y: Number.parseInt(superhero.powerstats.intelligence),
                },
                {
                    label: "Fuerza",
                    y: Number.parseInt(superhero.powerstats.strength),
                },
                {
                    label: "Velocidad",
                    y: Number.parseInt(superhero.powerstats.speed),
                },
                {
                    label: "Durabilidad",
                    y: Number.parseInt(superhero.powerstats.durability),
                },
                {
                    label: "Poder",
                    y: Number.parseInt(superhero.powerstats.power),
                },
                {
                    label: "Combate",
                    y: Number.parseInt(superhero.powerstats.combat),
                },
            ],
        }, ],
    };
    $("#chartContainer").CanvasJSChart(options);
}

//

// Cuando el formulario realice submit se activa la siguiente f(x)
formulario.submit(function(event) {
    // Como los formularios no trabajan con js se utiliza esta función para que no recargue la pag
    event.preventDefault();

    // Variable que guarda el valor del input del formulario
    const idSuperHeroe = inputForm.val();

    $.ajax({
        type: "GET",
        url: `https://www.superheroapi.com/api.php/4747081165343742/${idSuperHeroe}`,
        dataType: "json",
        success: function(data) {
            // Llamo a la función que conecta la api con el DOM
            renderSuperhero(data);
            renderSuperheroChart(data);
            console.log(data);
        },
    });
});