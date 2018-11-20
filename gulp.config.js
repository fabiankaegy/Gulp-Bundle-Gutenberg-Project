module.exports = {

	// Translation options.
	textDomain: 'textdomain', // Your textdomain here.
	translationFile: 'textdomain.pot', // Name of the translation file.
	translationDestination: './languages', // Where to save the translation files.
	packageName: 'testdomain', // Package name.
	bugReport: 'your_url.com', // Where can users report bugs.
	lastTranslator: 'Your Name <your_email@email.com>', // Last translator Email ID.
	team: 'Your Name <your_email@email.com>', // Team's Email ID.

	// Copy Options
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
