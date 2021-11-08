const { error } = require('console');
const fs = require('fs');
const path = require('path');
const readline = require('readline');


fs.readdir('03-files-in-folder/secret-folder', 
{withFileTypes: true },
(err, files) => {
  console.log("\nFiles:");
  if (err)
    console.log(err);
  else {
    
    files.forEach(file => {
        if(file.isDirectory() !== true) {
          fs.stat('03-files-in-folder/secret-folder/' + file.name, (error, stats) => {
            if(error) {
              console.log(error);

            } else {
              showFileInfo(stats, file.name)
            }
          })
          
        }
      
      
     
    })
  }

})




function showFileInfo(stat, fileName) {

  console.log(`${getNameFile(fileName)} - ${path.extname(fileName)} - ${stat.size}KB`);
  
  function getNameFile(fileName) {
    let indexName = fileName.lastIndexOf('.');
    let str = fileName.slice(0, indexName);
    return  str;
  }
}