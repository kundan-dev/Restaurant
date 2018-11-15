function validateEmail(emailField){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailField.value) == false) 
        {
            alert('Invalid Email Address');
            return false;
        }

        return true;

}


onload = function startAnimation() { 
    var frameHeight = 50; 
    var frames = 15; 
    var frame = 0; 
    var div = document.getElementById("animation"); 
    setInterval(function () { 
        var frameOffset = (++frame % frames) * -frameHeight; 
        div.style.backgroundPosition = "0px " + frameOffset + "px"; 
    }, 100); 
} 





