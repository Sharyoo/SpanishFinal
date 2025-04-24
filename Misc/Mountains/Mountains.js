$("#CordilleraBetica, #SierraMorena, #SistemaIberico, #SistemaCentral, #CordilleraCantabrica, #MontesVascos, #Pirineos, #CordillerasCatalanas, #MacizoGalaico, #Capital").hover(function() {
    
  if (this.id == "CordilleraBetica") {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element-long">' + 'Cordillera Bética' + '</div>');
    $("body").append(newElement);
  }
  else if (this.id == "SierraMorena") {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element-long">' + 'Sierra Morena' + '</div>');
    $("body").append(newElement);
  }
  else if (this.id == "SistemaIberico") {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element-long">' + 'Sistema Ibérico' + '</div>');
    $("body").append(newElement);
  }
  else if (this.id == "SistemaCentral") {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element-long">' + 'Sistema Central' + '</div>');
    $("body").append(newElement);
  }
  else if (this.id == "CordilleraCantabrica") {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element-long">' + 'Cordillera Cantábrica' + '</div>');
    $("body").append(newElement);
  }
  else if (this.id == "MontesVascos") {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element-long">' + 'Montes Vascos' + '</div>');
    $("body").append(newElement);
  }
  else if (this.id == "Pirineos") {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element-long">' + 'Pirineos' + '</div>');
    $("body").append(newElement);
  }
  else if (this.id == "CordillerasCatalanas") {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element-long">' + 'Cordilleras Catalanas' + '</div>');
    $("body").append(newElement);
  }
  else if (this.id == "MacizoGalaico") {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element-long">' + 'Macizo Galaico' + '</div>');
    $("body").append(newElement);
  }
  else {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element-long">' + this.id + '</div>');
    $("body").append(newElement);
  }

}, function() {

  $(this).css('fill', 'rgb(144, 238, 144)');
  $("body").find('.new-element').remove();
  $("body").find('.new-element-long').remove();
})