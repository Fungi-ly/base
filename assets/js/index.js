

$(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("#enviar").click(function () {
      alert("Enviado correctamente");
    });
  });




     

    $(document).ready(()=>{$('.alternar').on('click',function() {$('p').toggle();});});

    $(document).ready(()=>{$('.reset').on('click',function() {$('p').toggle();});});