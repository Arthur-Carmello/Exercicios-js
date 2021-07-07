const gulp = require('gulp')


gulp.task('default', () => {
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => { //dependências (tasks) pré-requisitos para executar a task copiar
    return gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) //gulp.src('pastaA/**/*.txt')
       // .pipe(transformacao1())
       // .pipe(transformacao2())
       .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log('Antes 1!!!')
})

gulp.task('antes2', () => {
    console.log('Antes 2!!!')
})

gulp.task('fim', () => {
    console.log('Fim!!!')
})
