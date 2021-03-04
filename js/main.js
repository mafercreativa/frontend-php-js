// INFO CORREGIMIENTO ROZO
//$('#comuna-8-rozo').click(function(){
//  if($('.info-com-rural.rozo').css('display') == 'none'){
//    $('.info-com-rural.rozo').show();
//    $('.info-com-rural.latorre').hide();
//    $('.info-com-rural.laacequia').hide();
//  }
//});
// INFO CORREGIMIENTO LA TORRE
//$('#comuna-8-latorre').click(function(){
//  if($('.info-com-rural.latorre').css('display') == 'none'){
//    $('.info-com-rural.latorre').show();
//    $('.info-com-rural.rozo').hide();
//    $('.info-com-rural.laacequia').hide();
//  }//else{
  //  $('.info-com-rural').hide();
//  }
//});
// INFO CORREGIMIENTO LA ACEQUIA
//$('#comuna-8-laacequia').click(function(){
//  if($('.info-com-rural.laacequia').css('display') == 'none'){
//    $('.info-com-rural.laacequia').show();
//    $('.info-com-rural.rozo').hide();
//    $('.info-com-rural.latorre').hide();
//  }
//});
// ACTIVACIÓN COLOR AZUL OSCURO SOBRE CORREGIMIENTO
//$('.portfolio-modal path').on("click", function() {
//  $('path.selected').attr("class", "");
//  $(this).attr("class", "selected");
//});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ACTIVACIÓN DE VALORES PERSONAS IMPACTADAS
$(document).ready(function() {
  $("#mapa-com-rurales path").on("mouseover", function() {
    $("img.icon-personas").css("visibility", "visible");
  }).on("mouseout", function() {
    $("img.icon-personas").css("visibility", "hidden");
  });
});

// ACTIVACIÓN DE VALORES PERSONAS IMPACTADAS
$(document).ready(function() {
  $("#mapa-com-rurales path").on("mouseover", function() {
    $("p.numero-personas").text($(this).data("number")).css("visibility", "visible");
  }).on("mouseout", function() {
    $("p.numero-personas").css("visibility", "hidden");
  });
});
// ACTIVACIÓN DE NOMBRE COMUNAS RURALES
$(document).ready(function() {
  $("#mapa-com-rurales path").on("mouseover", function() {
    $("div.nombre-comuna").text($(this).data("name")).css("visibility", "visible");
  }).on("mouseout", function() {
    $("div.nombre-comuna").css("visibility", "hidden");
  });
});

// ACTIVACIÓN DE NOMBRE CORREGIMIENTOS
$(document).ready(function() {
  $(".mapa-com-rural path").on("mouseover", function() {
    $("h3.nombre-corregimiento").text($(this).data("name")).css("visibility", "visible");
  }).on("mouseout", function() {
    $("h3.nombre-corregimiento").css("visibility", "hidden");
  });
});
$(document).ready(function() {
  $(".mapa-com-rural path").on("mouseover", function() {
    $("img.icon-personas2").css("visibility", "visible");
  }).on("mouseout", function() {
    $("img.icon-personas2").css("visibility", "hidden");
  });
});

// ACTIVACIÓN DE VALORES PERSONAS IMPACTADAS
$(document).ready(function() {
  $(".mapa-com-rural path").on("mouseover", function() {
    $("p.numero-personas2").text($(this).data("number")).css("visibility", "visible");
  }).on("mouseout", function() {
    $("p.numero-personas2").css("visibility", "hidden");
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ACTIVACIÓN DE VALORES PERSONAS IMPACTADAS
$(document).ready(function() {
  $("#mapa-com-urbanas path").on("mouseover", function() {
    $("img.icon-personas").css("visibility", "visible");
  }).on("mouseout", function() {
    $("img.icon-personas").css("visibility", "hidden");
  });
});

// ACTIVACIÓN DE VALORES PERSONAS IMPACTADAS
$(document).ready(function() {
  $("#mapa-com-urbanas path").on("mouseover", function() {
    $("p.numero-personas").text($(this).data("number")).css("visibility", "visible");
  }).on("mouseout", function() {
    $("p.numero-personas").css("visibility", "hidden");
  });
});

// ACTIVACIÓN DE NOMBRE COMUNAS URBANAS
$(document).ready(function() {
  $("#mapa-com-urbanas path").on("mouseover", function() {
    $("div.nombre-comuna").text($(this).data("name")).css("visibility", "visible");
  }).on("mouseout", function() {
    $("div.nombre-comuna").css("visibility", "hidden");
  });
});

// ACTIVACIÓN DE NOMBRE CORREGIMIENTOS
$(document).ready(function() {
  $(".mapa-com-rural path").on("mouseover", function() {
    $("h3.nombre-corregimiento").text($(this).data("name")).css("visibility", "visible");
  }).on("mouseout", function() {
    $("h3.nombre-corregimiento").css("visibility", "hidden");
  });
});
$(document).ready(function() {
  $(".mapa-com-rural path").on("mouseover", function() {
    $("img.icon-personas2").css("visibility", "visible");
  }).on("mouseout", function() {
    $("img.icon-personas2").css("visibility", "hidden");
  });
});

// ACTIVACIÓN DE VALORES PERSONAS IMPACTADAS
$(document).ready(function() {
  $(".mapa-com-rural path").on("mouseover", function() {
    $("p.numero-personas2").text($(this).data("number")).css("visibility", "visible");
  }).on("mouseout", function() {
    $("p.numero-personas2").css("visibility", "hidden");
  });
});
