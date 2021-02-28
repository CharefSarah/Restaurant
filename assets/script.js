
$(document).on('mouseover', '.ndContentImage', function (e) {
    $('img', this).toggleClass('ndContentImageHover');
});

$(document).on('mouseout', '.ndContentImage', function (e) {
    $('img', this).toggleClass('ndContentImageHover');
});

$(document).on('click', '.ndRaz', function () {
    document.getElementById("ndFormLastName").value = null;
    document.getElementById("ndFormFirstName").value = null;
    document.getElementById("ndFormMail").value = null;
    document.getElementById("ndFormNumber").value = null;
    document.getElementById("ndTextArea").value = "";
});


// Taille navbar scroll -----
var up = false;
var newscroll;

$(window).scroll(function () {
    newscroll = $(window).scrollTop();
    wWidth =$(window).width();
    if (wWidth >= 768) {
        if (newscroll >= 640 && !up) {
            $('#wtNavbar').addClass("wtScrollNavbar ");
            $('#wtLogoNavbar').addClass("wtLogoDisplayNone");
            $('#wtLogoNavbarLittle').removeClass("wtLogoDisplayNone");
            $('#logoFacebookTop').removeClass("wtLogoTop");
            $('#logoInstaTop').removeClass("wtLogoTop");
            $('#logoTwitterTop').removeClass("wtLogoTop")
            $('#logoFacebookTop').addClass("wtLogoTopReduce");
            $('#logoInstaTop').addClass("wtLogoTopReduce");
            $('#logoTwitterTop').addClass("wtLogoTopReduce");
            up = !up;
    
        } else if (newscroll <= 640 && up) {
            $('#wtNavbar').removeClass("wtScrollNavbar ");
            $('#wtLogoNavbar').removeClass("wtLogoDisplayNone");
            $('#wtLogoNavbarLittle').addClass("wtLogoDisplayNone");
            $('#logoFacebookTop').addClass("wtLogoTop");
            $('#logoInstaTop').addClass("wtLogoTop");
            $('#logoTwitterTop').addClass("wtLogoTop")
            $('#logoFacebookTop').removeClass("wtLogoTopReduce");
            $('#logoInstaTop').removeClass("wtLogoTopReduce");
            $('#logoTwitterTop').removeClass("wtLogoTopReduce");
            up = !up;
            
        } else {
            
        }
    }
    newscroll = $(window).scrollTop();
});

// RAZ
$(document).on('click', '.ndRaz', function () {
    document.getElementById("ndFormLastName").value = null;
    document.getElementById("ndFormFirstName").value = null;
    document.getElementById("ndFormMail").value = null;
    document.getElementById("ndFormNumber").value = null;
    document.getElementById("ndTextArea").value = "";
});


//declaration d'une variable contante pour tout le doc pour recupere l'ensemble des inputs du formulaire qui on la classe inputSelector
const inputInscription = document.querySelectorAll(".ndInputSelect");


//test général pour les inputs vide
inputInscription.forEach(element => element.addEventListener("blur", function(){
    testVide(element);
    ndDisableButton(element);
}, true));

//Fonction global pour mettre en rouge le champ incorrect
function testVide(element){
    if(! element.value.match(/^([a-zA-Z]+)$/)){
        element.classList.add("border-danger");
        element.classList.add("border-4");
    }else{
        element.classList.remove("border-danger");
        element.classList.remove("border-4");
    };
    
}
function ndDisableButton(element) {
    if(document.getElementById("ndFormLastName").value != "" && document.getElementById("ndFormFirstName").value != "" && document.getElementById("ndFormMail").value != "" &&
        document.getElementById("ndFormNumber").value != "" && document.getElementById("ndTextArea").value != ""){
            document.getElementById("ndSendForm").disabled = false;
        }else{
            document.getElementById("ndSendForm").disabled = true;
        }
}

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

document.getElementById("ndFormMail").addEventListener("blur", function(){
    if(!ndFormMail.value.match(/^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/)){
        ndFormMail.classList.add("border-danger");
        ndFormMail.classList.add("border-4");
    }else{
        ndFormMail.classList.remove("border-danger");
        ndFormMail.classList.remove("border-4");
    };
});
