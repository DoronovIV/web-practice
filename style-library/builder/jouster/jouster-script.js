const fs = require('fs');
const fse = require('fs-extra');
const prompt = require('prompt-sync')({sigint: true});

function write(str) {
	console.log(str);
}

function writeln(str) {
	write(str);
	write('\n')
}

function copy(libraryName, path) {
	try {
		fse.copySync(libraryName, path, {overwrite: true})
		writeln('Output successful.');
	}
	catch (err) {
		console.log(err);
	}
} 

function main() {

	writeln('\n\tWelcome to Jouster.');

	let sPath, sCommand, sLibraryName;

	do {
		sLibraryName = '../../' + prompt('Please, specify the name of the library you would like to use: ');
	} while (!fs.existsSync(sLibraryName));

	do {
		sPath = '../../../' + prompt('Please, specify library copy path: ');
	} while (!fs.existsSync(sPath));
	
	writeln('You have successfully added the output path. Copying...');
	
	copy(sLibraryName, sPath);

	do {
		
		sCommand = prompt('Enter \'build\' to build again, or type \'exit\' to exit the application: ');
		
		if (sCommand === 'build') {
			writeln('');
			copy(sLibraryName, sPath);
		}

	} while (sCommand !== 'exit');
}

main();