
global.jQuery = require( 'jquery' ); /* Declaramos de forma global las dependencias que vamos a usar en el proyecto */
bootstrap = require( 'bootstrap' );
Mustache = require( 'mustache' );

jQuery( document ) .ready( function( $ ) {
  /* Obtenemos los datos del archivo JSON haciendo un "Request" a través de AJAX y lo asignamos a una variable */
  var xhr_data = $ .getJSON( 'data.json', function() {

  }). done( function( data ){   /* Usamos el método "done" para garantizar que solo cuando finalice el "Request"
                                   va a ejecutar una acción (a través de una función anónima) */
    console .log( data );
    var template = $( '#template' ) .html();                 /* Busca ID con el nombre de "template" */
    var showTemplate = Mustache.render( template, data );    /* Delegamos a "Mustache" el formateo de los datos */
    $( '#galeria-londres' ) .html( showTemplate );           /* Desplegamos en la vista donde el TAG tenga un ID con el nombre "galeria-londres"  */
  });
});
