
global.jQuery = require( 'jquery' ); /* Declaramos de forma global las dependencias que vamos a usar en el proyecto */
bootstrap = require( 'bootstrap' );
Mustache = require( 'mustache' );

jQuery( document ) .ready( function() {
  saluda( ' usando el paquete "concat" en Sass e integrando \n"jQuery", "Bootstrap" y "Mustache" \nal proyecto usando "gulp-browserify"' );
});
