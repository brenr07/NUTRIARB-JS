// CLASE PACIENTE
class Paciente {
  //CONSTRUCTOR DE CLASE PRODUCTO
  constructor (f) {
    let form={}
      $(f).serializeArray().forEach(element =>
        form[element.name] = element.value
      );
      this.generar(form)
      // localStorage.setItem('Paciente',JSON.stringify(this.form));
    }

  generar (data, id=Date.now()) {
      console.log(data)
      this.id = id;
      this.name = data.name.toUpperCase();
      this.surname = data.surname.toUpperCase();
      // this.weight = [{weight:parseFloat(data.weight),date:Date.now()}]
      this.weight = parseFloat(data.weight)
      this.height = parseFloat(data.height);
      this.date = data.date;
  }
  
  //MÉTODO PARA CALCULAR IMC
  // calcularIMC() {
  //     let peso = this.pesos[this.pesos.length-1].peso
  //     this.imc = peso/(this.altura*this.altura); 
  // }
  // agregarPeso(peso, fecha = Date.now()){
  //     this.pesos.push({peso:parseFloat(peso),fecha:fecha})
  // }
  card(){
    return `
    <h2> Paciente: ${this.name} ${this.surname}</h2>
    <h2> Fecha: ${this.date} - Peso:${this.weight}</h2>
    <button
        onclick=acciones(event)
        data-accion="eliminarPaciente"
        data-id="${this.id}"
    > Eliminar </button> 
    `
  }
}

class Consultorio{
    constructor(){
        this.pacientes = []
    }
    render(){
      $("#listadoPacientes").html(consultorio.listadoPacientes())
    }
    crearPaciente(formulario){
      this.pacientes.push(new Paciente(formulario))
      this.render()
    }
    guardarPaciente() {
      const pacienteJSON = JSON.stringify(this.pacientes)
      let objeto = JSON.parse(pacienteJSON)
      localStorage.setItem(objeto[objeto.length-1].name + ' ' + objeto[objeto.length-1].surname, pacienteJSON);
  }
    listadoPacientes(){
      return this.pacientes.map(paciente=>paciente.card())
    }
    eliminarPaciente(id){
      this.pacientes=this.pacientes.filter(paciente=>paciente.id!=id)
      this.render()
    }
}
const consultorio=new Consultorio()

function acciones(event){
  event.preventDefault()
  let data=event.target.dataset
  consultorio[data.accion](data.id)

}

$( "#custom-form" ).on( "submit", function( event ) {
  event.preventDefault();
  consultorio.crearPaciente(this)
  consultorio.guardarPaciente(this)
  console.log(consultorio.pacientes)

});
