const { src, dest, series, parallel } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');
const gulpCopy = require('gulp-copy');
const rename = require("gulp-rename");
const webpack = require('webpack-stream');

let path = {
	build: {
		html: "build/",
		js: "build/js/",
		css: "build/css/",
		img: "build/images/",
		fonts: "build/fonts/",
	},
	src: {
		style: "src/sass/style.scss",
		pug: "src/pages/*.pug",
		img: "src/blocks/**/*.{png,jpg,jpeg,svg,gif}",
		js: "src/blocks/main.js",
		resources_img: "src/resources/images/**/*.*",
		resources_js: "src/resources/js/*.js",
		resources_fonts: "src/resources/fonts/*.{eot,svg,ttf,woff,woff2,otf}",
		resources_css: "src/resources/css/*.css",
		resources: "src/resources/**/*.*",
		resources_path: "src/resources/**/*",
		icon: "src/resources/icons/*.svg",
	},
	watch: {
		style: "src/**/*.scss",
		pug: "src/**/*.pug",
		js: "src/**/*.js",
		img: "src/blocks/*.{png,jpg,jpeg,svg,gif}",
		icon: "src/resources/icons/*.svg",
	},
	clean: "./build",
};

function cleanTask() {
	return src(path.build.html)
		.pipe(clean({ force: true }));
}

function pugTask() {
	return src(path.src.pug)
		.pipe(
			pug({
				// Your options in here.
			})
		)
		.pipe(dest(path.build.html));
}

function stylesTask() {
	return src(path.src.style)
		.pipe(sass().on('error', sass.logError))
		.pipe(dest(path.build.css));
}

function resourcesTask() {
	return src(path.src.resources)
		.pipe(gulpCopy(path.build.html, { prefix: 2 }))
		.pipe(dest(path.build.html));
}

function imagesTask() {
	return src(path.src.img, { encoding: false })
		.pipe(rename({ dirname: "" }))
		.pipe(dest(path.build.img));
}

function jsTask() {
	return src(path.src.js)
		.pipe(
			webpack({
				mode: "production",
				output: {
					filename: "script.js",
				},
				devtool: "source-map",
				// module: {
				// 	rules: [
				// 		{
				// 			test: /\.m?js$/,
				// 			exclude: /(node_modules|bower_components)/,
				// 			use: {
				// 				loader: "babel-loader",
				// 				options: {
				// 					presets: [
				// 						[
				// 							"@babel/preset-env",
				// 							{
				// 								corejs: 3,
				// 								useBuiltIns: "usage",
				// 							},
				// 						],
				// 					],
				// 				},
				// 			},
				// 		},
				// 	],
				// },
			})
		)
		.pipe(dest(path.build.js));
}

exports.build = series(cleanTask, pugTask, stylesTask, resourcesTask, imagesTask, jsTask);
exports.default = series(cleanTask);