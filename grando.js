(function($) {
 
    $.fn.showImageAlt = function() {
        var img = $(this);
        var alt = img.attr("alt");
        if(alt === "") {
        	alt = "Alt não informado";
        }

        $(this).after("<div>Nome: " + alt + "</div>");
        return this;
    };

    $.fn.encodeText = function() {
    	var texto = this.html();

    	texto = texto.replace(/e/g, "enter");
    	texto = texto.replace(/i/g, "inis");
    	texto = texto.replace(/o/g, "omber");
    	texto = texto.replace(/u/g, "ufter");
    	texto = texto.replace(/a/g, "ais");

    	return texto;
    };
 
}(jQuery));