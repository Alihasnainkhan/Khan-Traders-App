const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const outputList = [];
const output = fs.createWriteStream(path.join(__dirname, '../Khan_Traders_HuggingFace.zip'));
const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});

output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log('Archiver has been finalized and the output file descriptor has closed.');
});

archive.on('warning', function (err) {
    if (err.code === 'ENOENT') {
        console.warn(err);
    } else {
        throw err;
    }
});

archive.on('error', function (err) {
    throw err;
});

archive.pipe(output);

// append files from a sub-directory, putting its contents at the root of archive
archive.directory('backend/', 'backend', {
    ignore: ['node_modules/**', '.env']
});
archive.directory('frontend/', 'frontend');
archive.directory('database/', 'database');
archive.file('Dockerfile', { name: 'Dockerfile' });
archive.file('.dockerignore', { name: '.dockerignore' });

archive.finalize();
