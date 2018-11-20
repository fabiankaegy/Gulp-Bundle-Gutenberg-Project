module.exports = {

	packageName: 'packageName',
	
	buildFiles: [ 
		'**',
		'!blocks/**', 
		'!webpack.config.js',  
		'!node_modules/**', 
		'!gulpfile.js', 
		'!gulp.config.js', 
		'!package.json', 
		'!package-lock.json', 
		'!build/**', 
		'!.editorconfig', 
		'!.gitignore', 
		'!.eslintrc.js', 
		'!.eslintignore', 
		'!phpcs.xml.dist' 
	],

	buildDestination: './build',

};
