//быстрый старт
/*

//Если ранее вы устанавливали Gulp глобально, запустите 
npm rm --global gulp перед тем, как выполнять какие-либо инструкции документации.
node --version
npm --version
npx --version

//Установите утилиту командной строки Gulp
npm install --global gulp-cli
npx mkdirp my-project
cd my-project
npm init

//Установите пакет gulp в ваши зависимости devDependencies
npm install --save-dev gulp
gulp --version

*/

// Определяем переменную "preprocessor"
let preprocessor = 'sass'; // Выбор препроцессора в проекте - sass или less

// Определяем константы Gulp
const { src, dest, parallel, series, watch } = require('gulp');

// Подключаем модули Gulp
const browserSync  = require('browser-sync').create();
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify-es').default;
const sass         = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleancss     = require('gulp-clean-css');
const changed      = require('gulp-changed');
const del          = require('del');

//const imagemin     = require('gulp-imagemin');

function browsersync() {
	browserSync.init({
		server: { baseDir: 'app/' },
		notify: false,
		online: true
	})
}

function scripts() {
	return src([
		'app/js/app.js'
		])
	.pipe(concat('app.min.js'))
	.pipe(uglify())
	.pipe(dest('app/js/'))
	.pipe(browserSync.stream())
}

function styles() {
	return src('app/' + preprocessor + '/main.' + preprocessor + '') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
	.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
	.pipe(concat('app.min.css')) // Конкатенируем в файл app.min.css
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
	.pipe(cleancss( { level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ } )) // Минифицируем стили
	.pipe(dest('app/css/')) // Выгрузим результат в папку "app/css/"
	.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

function cssmin(){
	return src(['app/css/libs.min.css', 'app/css/app.min.css']) // Выбираем файл для минификации
	.pipe(cleancss( { level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ } )) // Минифицируем стили
	.pipe(concat('template_styles.css'))
	.pipe(dest('dist/css')); // Выгружаем в папку app/css
}

//async function images() {
//	imagecomp(
//		"app/images/src/**/*", 
//		"app/images/dest/", 
//		{ compress_force: false, statistic: true, autoupdate: true }, false, 
//		{ jpg: { engine: "mozjpeg", command: ["-quality", "75"] } }, 
//		{ png: { engine: "pngquant", command: ["--quality=75-100", "-o"] } },
//		{ svg: { engine: "svgo", command: "--multipass" } },
//		{ gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
//		function (err, completed) { 
//			if (completed === true) {
//				browserSync.reload()
//			}
//		}
//	)
//}

function images(){
	return src('app/img/src/**/*')
	.pipe(changed('app/img/dest/'))
	.pipe(imagemin([
		imagemin.gifsicle({interlaced: true}),
		imagemin.mozjpeg({quality: 75, progressive: true}),
		imagemin.optipng({optimizationLevel: 5}),
		imagemin.svgo({
			plugins: [
			{removeViewBox: true},
			{cleanupIDs: false}
			]
		})
	]))
	.pipe(dest('app/img/dest/'))
}

function cleanimg() {
	return del('app/img/dest/**/*', { force: true }) // Удаляем все содержимое папки "app/images/dest/"
}

function cleandist() {
	return del('dist', { force: true }) // Удаляем все содержимое папки "app/images/dest/"
}

function buildcopy() {
	return src([ // Выбираем нужные файлы
		'app/css/**/*.min.css',
		'app/js/**/*.min.js',
		'app/img/dest/**/*',
		'app/**/*.html',
		], { base: 'app' }) // Параметр "base" сохраняет структуру проекта при копировании
	.pipe(dest('dist')) // Выгружаем в папку с финальной сборкой
}

function startwatch() {
	// Выбираем все файлы JS в проекте, а затем исключим с суффиксом .min.js
	watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
	// Мониторим файлы препроцессора на изменения
	watch('app/**/' + preprocessor + '/**/*', styles);
	// Мониторим файлы HTML на изменения
	watch('app/**/*.html').on('change', browserSync.reload);
	watch('app/img/**/*', images);
}

// Экспорт функций в таски
exports.browsersync = browsersync;
exports.scripts     = scripts;
exports.styles      = styles;
exports.cssmin		= cssmin;
exports.images 		= images;
exports.cleanimg 	= cleanimg;
// Создаем новый таск "build", который последовательно выполняет нужные операции
exports.build = series(cleandist, styles, cssmin, scripts, buildcopy);
 
// Экспортируем дефолтный таск с нужным набором функций
exports.default = parallel(styles, scripts, browsersync, startwatch);