

$('#btnCalcular').click(function(e) {
    e.preventDefault();
    var peso = $('#txtPeso').val();
    var altura = $('#txtAltura').val();
    var imc = peso / (altura * altura);
    var spanIMC = $('<span>').text('IMC: '+imc);
    var hr = $('<hr>');
    $('#imc').append(spanIMC).append(hr);

    if (imc<=15){
      $("#desnutricionGrave").css({"background-color":"#b40c4e"});
    }
    else if (imc>15 && imc<=15.9){
      $("#desnutricion").css({"background-color":"#f4b835"});
    }
    else if (imc>=16 && imc<=18.49){
      $("#bajoPeso").css({"background-color":"#e7ed40"});
    }
    else if (imc>=18.5 && imc<=24.9){
      $("#pesoS").css({"background-color":"#8dc63a"});
    }
    else if (imc>=25 && imc<=29.9){
      $("#sobrepeso").css({"background-color":"#e7ed40"});
    }
    else if (imc>=30 && imc<=34.9){
      $("#obesidad").css({"background-color":"#f4b835"});
    }
    else if (imc>35){
      $("#obesidadM").css({"background-color":"#b40c4e"});
    }
  });
