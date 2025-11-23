const fs = require('fs');

// console.log('Start reading file asynchronously:');
// fs.readFile('input.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
       
//     }else {
//         console.log(data);
//     }
// });
// console.log('End of asynchronous file read.');


// console.log('Start reading file synchronously:');

//  const data = fs.readFileSync('input.txt', 'utf8', );
// console.log(data);

// console.log('End of synchronous file read.');

//fs write file
// fs.writeFile('output.txt', 'Hello, this is a test file!', (err) => {
//     if (err) {
//         console.error('Error writing file:', err); 
//      }
//     else {
//         console.log('File written successfully.');
//         }
//     })

// //append file
// fs.appendFile('output.txt', '\nThis is an appended line.', (err) => {
//     if (err) {
//         console.error('Error appending file:', err);
//     }else{
//         console.log('File appended successfully.'); 
//     }
//     })
    
// //delete file
// fs.unlink('output.txt', (err) => {
//     if (err){
//         console.error('Error deleting file:', err); 
//      }else {
//         console.log('File deleted successfully.');
//     }
// } );

// //create directory
// fs.mkdir('newDir', (err) => {
//     if (err) {
//         console.error('Error creating directory:', err); 
//      }else {
//         console.log('Directory created successfully.');
//     }
// } );

// //remove directory
// fs.rmdir('newDir', (err) => {
//     if (err) {
//         console.error('Error removing directory:', err); 
//      }else {
//         console.log('Directory removed successfully.');
//     }
// } );     

//recomended

     const readStrem = fs.createReadStream('input.txt', 'utf8');
     readStrem.on('data', (chunk) => {
        console.log('New chunk received:');
        console.log(chunk);
     });
        readStrem.on('end', () =>  {
        console.log('No more data to read.');
     });
    readStrem.on('error', (err) => {
        console.error('Error reading file:', err);
     });
     
    const writeStream = fs.createWriteStream('output.txt');
    writeStream.write('Hello, this is a test file using streams!\n');
    writeStream.write('This is the second line.\n');
    writeStream.end('This is the end of the file.\n');
    writeStream.on('finish', () => {
        console.log('File written successfully using streams.');
     });
    writeStream.on('error', (err) => {
        console.error('Error writing file:', err);
     });    

     //pipe
     const readStreamPipe = fs.createReadStream('input.txt', 'utf8');
     const writeStreamPipe = fs.createWriteStream('output_pipe.txt');
     readStreamPipe.pipe(writeStreamPipe);  
        console.log('Piping data from input.txt to output_pipe.txt');
        writeStreamPipe.on('finish', () => {
        console.log('Piping completed successfully.');
        });