$(document).ready(function() {
    // Validación del nombre
    $("#name").keyup(function() {
      nameValidation();
      submitValidation();
    });

    // Validación del nombre
    $("#usuario_reportado").keyup(function() {
        asuntoValidation();
        submitValidation();
    });

    // Validación del mensaje
    $("#evidencia").keyup(function() {
      messageValidation();
      submitValidation();
    });
  
    // Validación del correo electrónico
    $("#email").keyup(function() {
      mailValidation();
      submitValidation();
    });
  
    function nameValidation() {
      $("#name").removeClass('is-valid');
      $("#name").removeClass('is-invalid');
      if ($('#name').val() != '') {
        if ( $("#name").val().match(/^$/g)) {
          $("#name").addClass('is-invalid');
        }
        else if ( $("#name").val().match(/^.{64,}$/g)) {
          $("#name").addClass('is-invalid');
        }
        else if ( $("#name").val().match(/\W/)) {
          $("#name").addClass('is-invalid');
        }
        else if ($("#name").val().match(/^\S+(?: \S+)*$/g) == null) {
          $("#name").addClass('is-invalid');
        }
        else if ($("#name").val().match(/\d+/g) != null) {
          $("#name").addClass('is-invalid');
        }
        else {
          $("#name").addClass('is-valid');
        }
      }
      else {
        $("#name").addClass('is-valid');
      }
  }

    function asuntoValidation() {
        $("#usuario_reportado").removeClass('is-valid');
        $("#usuario_reportado").removeClass('is-invalid');
    
        if ( $("#usuario_reportado").val().match(/^$/g)) {
          $("#usuario_reportado").addClass('is-invalid');
        }
        else if ( $("#usuario_reportado").val().match(/^.{64,}$/g)) {
          $("#usuario_reportado").addClass('is-invalid');
        }
        else if ($("#usuario_reportado").val().match(/^\S+(?: \S+)*$/g) == null) {
          $("#usuario_reportado").addClass('is-invalid');
        }
        else {
          $("#usuario_reportado").addClass('is-valid');
        }
      }
  
    function messageValidation(){
      $("#evidencia").removeClass('is-valid');
      $("#evidencia").removeClass('is-invalid');
  
      if ( $("#evidencia").val().match(/^$/g)) {
        $("#evidencia").addClass('is-invalid');
      }
      else if ( $("#evidencia").val().match(/^.{64,}$/g)) {
        $("#evidencia").addClass('is-invalid');
      }
      else if ($("#evidencia").val().match(/^\S+(?: \S+)*$/g) == null) {
        $("#evidencia").addClass('is-invalid');
      }
      else {
        $("#evidencia").addClass('is-valid');
      }
    }
  
    function mailValidation() {
      $("#email").removeClass('is-valid');
      $("#email").removeClass('is-invalid');
  
      if ( $("#email").val().match(/^$/g)) {
        $("#email").addClass('is-invalid');
        $(".email.invalid-feedback").text("Debes completar este campo");
      }
      else if ($("#email").val().match(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g) == null) {
        $("#email").addClass('is-invalid');
        $(".email.invalid-feedback").text("El correo electrónico no es válido");
      }
      else if ($("#email").val().match(/^.{100,}$/g) != null) {
        $("#email").addClass('is-invalid');
        $(".email.invalid-feedback").text("El correo no puede tener más de 100 caracteres");
      }
      else if ($("#email").val().match(/^\S+(?: \S+)*$/g) == null) {
        $("#email").addClass('is-invalid');
        $(".email.invalid-feedback").text("El correo no empezar ni terminar con espacios");
      }
      else {
        $("#email").addClass('is-valid');
      }
    }
  
    function submitValidation () {
      if (!$("#name").hasClass('is-valid')) {
        $("#submit").attr("disabled", true);
      }
      else if (!$("#email").hasClass('is-valid')) {
        $("#submit").attr("disabled", true);
      }
      else if (!$("#usuario_reportado").hasClass('is-valid')) {
        $("#submit").attr("disabled", true);
      }
      else if (!$("#evidencia").hasClass('is-valid')) {
        $("#submit").attr("disabled", true);
      }
      else{
        $("#submit").removeAttr("disabled");
      }
    }
  });
  
  