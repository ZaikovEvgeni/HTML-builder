const { error } = require('console');
const fs = require('fs');
const path = require('path');
const readline = require('readline');



fs.writeFile('05-merge-styles/project-dist/bundle.css', `/*Hello Guys*/\n`, function(err) {
  if(err) throw err;

})




fs.readdir('05-merge-styles/styles/',
{ withFileTypes: true },
(err, files) => {
  if (err) console.log(err);
  files.forEach(file => {

    if(path.extname(file.name) === '.css') {
      fs.readFile('05-merge-styles/styles/'+ file.name, (error, data) => {
        if(error) throw error;
  
        fs.appendFile('05-merge-styles/project-dist/bundle.css', data, (err) => {
          if(err) console.log(err);
  
        })
       
         }
        
      )}
     
    }
    
  )
        
   
 })
