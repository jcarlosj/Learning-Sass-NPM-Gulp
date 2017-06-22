
global.jQuery = require( 'jquery' ); /* Declaramos de forma global las dependencias que vamos a usar en el proyecto */
bootstrap = require( 'bootstrap' );
Mustache = require( 'mustache' );

jQuery( document ) .ready( function() {
  saluda( ' usando el paquete "concat" en Sass e integrando "jQuery", "Bootstrap" y "Mustache" al proyecto usando "gulp-browserify"' );
});
