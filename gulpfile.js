/* Llamado a las Dependencias necesarias instaladas en el proyecto a través del "package.json" */
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');         /* browserSync: sincroniza automáticamente cambios de archivos en el navegador */
var reload = browserSync.reload;                   /* browserSync.reload: recarga el navegador cuando hay cambios en los archivos */
var autoprefixer = require( 'gulp-autoprefixer' );

/* Crea la tarea "sass"
   1. Define el nombre de la tarea "sass"
   2. Defines las tareas que debe ejecutar la tarea "sass" */
gulp.task('sass', function() {
  /* Define las acciones de la tarea
     1. Indica a Gulp el archivo raiz Sass a partir del cual se definiran cambios en los estilos del proyecto */
  gulp.src('scss/app.scss')
    .pipe( autoprefixer() )           /* Implementa los prefijos de los elementos CSS que lo requieran (CSS no estandar) */
    .pipe(
      sass({
        includePaths: ['scss']
      })
    )
    .pipe( gulp .dest( 'app/css' ) ); /* Configura el destino de los archivos preprocesados por Sass */
});

/* Crea la tarea "serve"
   1. Define el nombre de la tarea "serve"
   2. Ejecuta la tarea denominada "sass", previamente definida
   3. Define las tareas que debe ejecutar la tarea "serve" */
gulp.task('serve', ['sass'], function() {
  /* Define las acciones de la tarea
     1. Indica a browserSync las rutas en las que debe sincronizar los cambios */
  browserSync.init(["app/css/*.css", "app/js/*.js", "app/*.html"], {
    /* 2. Configura el directorio raiz para la virtualización del servidor de Gulp */
    server: {
      baseDir: 'app'    /* Directorio "app" en el raiz del proyecto */
    }
  });

});

/* Crea la tarea "watch"
   1. Define el nombre de la tarea "watch"
   2. Ejecuta la tarea denominada "sass" y posteriormente la tarea denominada "serve", previamente definidas
   3. Define las tareas que debe ejecutar la tarea "watch"
    */
gulp.task('watch', ['sass', 'serve'], function() {
  /* 1. Ejecuta el seguimiento de los archivos con Gulp, indicandole:
       a. La ruta de los archivos .scss
       b. Ejecutando posteriormente la tarea "sass", previamente definida */
  gulp.watch(["scss/*.scss"], ['sass']);
});
