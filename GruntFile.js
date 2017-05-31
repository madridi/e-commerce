module.exports = function(grunt) {
    grunt.initConfig({
        nodemon: {
            dev: {
                script: 'index.js',
                options: {
                    ext: 'js',
                    watch: ['server.js', 'backend/**/*.js', 'config/**/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerTask('dev', ['nodemon']);
}