function fbui( FB ) {

var facebookCSSes = [
    "https://s-static.ak.facebook.com/rsrc.php/v1/yP/r/3agUeS1-PpS.css",
    "https://s-static.ak.facebook.com/rsrc.php/v1/yH/r/DXj0nhocxmG.css",
    "https://s-static.ak.facebook.com/rsrc.php/v1/yF/r/suuU7DWs5oj.css",
    "https://s-static.ak.facebook.com/rsrc.php/v1/yw/r/0TDrTKCGeAI.css",
    "https://s-static.ak.facebook.com/rsrc.php/v1/yi/r/XjqlI_meamE.css",
    "https://s-static.ak.facebook.com/rsrc.php/v1/yp/r/DfgNxiJ3IwA.css",
    "https://s-static.ak.facebook.com/rsrc.php/v1/yo/r/CxN9n1-F0pA.css",
    "https://s-static.ak.facebook.com/rsrc.php/v1/yJ/r/ioO0AixaqLt.css",
    "https://s-static.ak.facebook.com/rsrc.php/v1/yU/r/uPW9xLvwZ1R.css",
    "https://s-static.ak.facebook.com/rsrc.php/v1/y5/r/D-4QGnNagV6.css",
    "https://s-static.ak.facebook.com/rsrc.php/v1/ym/r/0cGLGi94siP.css",
    "https://s-static.ak.facebook.com/rsrc.php/v1/yK/r/1zfxkjjeRbE.css",
    "https://s-static.ak.facebook.com/rsrc.php/v1/yx/r/R2E8502CTAi.css",
    "https://s-static.ak.facebook.com/rsrc.php/v1/yH/r/I2hlLwJdzxU.css",
    "https://s-static.ak.facebook.com/rsrc.php/v1/yx/r/R2E8502CTAi.css",
];

$.each( facebookCSSes, function( i, href ) {
    var css = $( "<link></link>" ).attr({
        type: "text/css",
        rel: "stylesheet",
        href: href
    });
    css.appendTo( document.head );
});

FB.subclass( "XFBML.Button", "XFBML.Element", null, {

    markup: "<a class='uiButton'>" +
            "<span class='uiButtonText'></span></a>",

    colorMap: {
        "gray": "",
        "blue": "uiButtonConfirm",
        "green": "uiButtonSpecial",
    },

    iconMap: {
        "left-arrow": "sp_2jtp30 sx_823ec3",
        "lock": "sp_aozaji sx_66d1a1",
        "plus": "sp_7jfqvm sx_2c6a83",
        "gear": "sp_3czees sx_24fa99",
        "edit": "sp_axqb8t sx_d9b057",
    },

    sizeMap: {
        "medium": "",
        "large": "uiButtonLarge",
    },

    setupAndValidate: function() {
        this.color = this.getAttribute( "color" ) || "gray";
        this.size = this.getAttribute( "size" ) || "medium";
        this.icon = this.getAttribute( "icon" );
        this.disabled = this.getAttribute( "disabled" );
        this.href = this.getAttribute( "href" );
        return true;
    },

    process: function() {
        if ( !this.setupAndValidate() ) {
            this.fire( "render" );
            return;
        }

        var dom = $( this.dom );
        dom.wrapInner( this.markup );
        var inner = dom.children();

        inner.addClass( this.colorMap[ this.color ] );
        inner.addClass( this.sizeMap[ this.size ] );

        if ( this.icon ) {
            var i = $( "<i class='mrs img'></i>" );
            i.addClass( this.iconMap[ this.icon ] ).prependTo( inner );
        }

        if ( this.disabled ) {
            inner.addClass( "uiButtonDisabled" );
        }

        if ( this.href ) {
            inner.attr( "href", this.href );
        }
    }

});

FB.subclass( "XFBML.ConfirmButton", "XFBML.Button", null, {

    markup: "<a class='uiButton uiButtonConfirm'>" +
            "<span class='uiButtonText'></span></a>"

});

$.each({
    "button": "FB.XFBML.Button",
}, function( localName, className ) {
    FB.XFBML.registerTag({
        xmlns: "fb",
        localName: localName,
        className: className
    });
});

}
