class Formulario{
  constructor (f) {
    $(f).serializeArray().forEach(element =>
      this[element.name] = element.value
    );
  }
  cardTurnos(){
    return `
    <div class="turno card m-2 p-3"> 
      <h2>Nombre: ${this.name} </h2>
      <h2>Apellido: ${this.surname} </h2>
      <h2>Teléfono de contacto: ${this.phone} </h2>
      <h2>Tipo de consulta: ${this.tipoConsulta} </h2>
    </div>
  `;
  }
}

$( "#custom-form" ).on( "submit", function( event ) {
  event.preventDefault();
  let form = new Formulario (this)
  console.log(form)
  $("body").append(form.cardTurnos())
});

