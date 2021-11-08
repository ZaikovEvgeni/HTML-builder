const fs = require('fs');
const path = require('path');
const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');
// const rl = readline.createInterface({ input, output });


fileDelete();
// fileHandler();
console.log('Enter text: ');
let isTrue = false;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', line => {
  if(line === 'exit') {
    console.log('Goodbye');
    process.exit();
  }

  fs.appendFile('02-write-file/textFile.txt', `${line}\n`, err => {
    if(err) throw err;
  })
  
}).on('close', ()=> {
  console.log('Goodbye');
})




function fileDelete(){
  fs.access('02-write-file/textFile.txt', function(err) {
    if(err) {
      fileHandler();
    } else {
      fs.unlink('02-write-file/textFile.txt', (err) => {
        if(err) throw err;
        fileHandler();
    });
    }
  })
    

 
}



function fileHandler(){

  fs.open('02-write-file/textFile.txt', 'w', (err) => {
      if(err) throw err;
   });
}