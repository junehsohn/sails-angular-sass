
[sass install]
0. npm install
1. ruby install
2. (ruby console)=> gem install sass
3. (ruby console)=> gem install compass
4. npm install -g grunt-contrib-sass
5. task/config에 sass.js 생성
	module.exports = function(grunt) {

	    grunt.config.set('sass', {
	        dev: {
	            files: [{
	                expand: true,
	                cwd: 'assets/styles/',
	                src: ['importer.scss'],
	                dest: '.tmp/public/styles/',
	                ext: '.css'
	            }]
	        }
	    });

	    grunt.loadNpmTasks('grunt-contrib-sass');
	};

6. task/config에 copy.js 에 'src'부분을 아래처럼 수정
	grunt.config.set('copy', {
	        dev: {
	            files: [{
	                expand: true,
	                cwd: './assets',
	                // Before: src: ['**/*.!(coffee|less)'],
	                src: ['**/*.!(coffee|less|scss|sass)'],
	                dest: '.tmp/public'
	            }]
	        },
	        build: {
	            files: [{
	                expand: true,
	                cwd: '.tmp/public',
	                src: ['**/*'],
	                dest: 'www'
	            }]
	        }
    });

7.  task/register/compileAssets.js에 아래처럼 추가
	grunt.registerTask('compileAssets', [
	        'clean:dev',
	        'jst:dev',
	        'less:dev',
	        'sass:dev', <-- Add that
	        'copy:dev',
	        'coffee:dev'
    ]);

8.  task/register/syncAssets.js에 아래처럼 추가
	grunt.registerTask('syncAssets', [
        'jst:dev',
        'less:dev',
        'sass:dev', <-- Add that
        'sync:dev',
        'coffee:dev'
    ]);

* sails lift후 "you need to have ruby and sass installed and in your path for this task to work" 
란 경고가 뜨면 ruby를 install후 ruby에서 sass, compass를 install한다(gem install sass, gem install compass)