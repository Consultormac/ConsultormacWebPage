var num = 1;
$('#imgLogo').attr("src", "images/Inicio/LogoBlack.png");

jQuery(document).ready(function ($) {
    $(function () {
        $('#button-addon1').click(function (e) {
            validateSendEmail(e);
        });
        $('#button-addon2').click(function (e) {
            alert("Acaba de suscribirse a nuestro portal");
        });
    });
});

function validateSendEmail() {

    var Nombre = $("#Nombre").val();
    var Apellidos = $("#Apellidos").val();
    var Correo = $("#Correo").val();
    var Asunto = $("#Asunto").val();
    var Mensaje = $("#Mensaje").val();

    if (Nombre !== "" && Apellidos !== "" && Correo !== "" && Asunto !== "" && Mensaje !== "") {
        sendEmail(Nombre, Apellidos, Correo, Asunto, Mensaje);
    }
    else {
        alert("Favor de llenar el formulario, todos los campos son requeridos");
    }
}

function sendEmail(Nombre, Apellidos, Correo, Asunto, Mensaje) {

    var MailData = {};

    MailData.Nombre = Nombre;
    MailData.Apellidos = Apellidos;
    MailData.Correo = Correo;
    MailData.Asunto = Asunto;
    MailData.Mensaje = Mensaje;

    $.ajax({
        type: 'POST',
        url: 'http://consultormac.com.mx/WebServices/SendEmail.asmx/SendEmail',
        data: "{'Obj':" + JSON.stringify(MailData) + "}",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: false,
        success: function (data) {
            if (data.d !== null) {
                if (contains(data.d, "Error")) {
                    alert(data.d);
                }
                else {
                    alert(data.d);

                }
            }
        },
        error: function (a, b, error) {
            alert("Error al momento de enviar el correo" + "\n\n" + error);
        }
    });
}

//Función que genera un contains para validar si el texto de una cadena se encuentra en otra
function contains(value, searchFor) {
    var v = (value || '').toLowerCase();
    var v2 = searchFor;
    if (v2) {
        v2 = v2.toLowerCase();
    }
    return v.indexOf(v2) > -1;
}

$(window).scroll(function () {
    num = $(window).scrollTop() / 3;
    if (parseInt(num) === num) {
        $('#imgLogo').attr("src", "images/Inicio/" + num + ".png");
    }

    if (num < 30)
        $('#imgLogo').attr("src", "images/Inicio/LogoWhite.png");

    if (num < 1)
        $('#imgLogo').attr("src", "images/Inicio/LogoBlack.png");

    if (num > 30)
        $('#imgLogo').attr("src", "images/Inicio/LogoWhite.png");
});

function openmodal(img) {
    $('#imgModal').attr("src", "images/Servicios/" + img + ".PNG");
}				
 
