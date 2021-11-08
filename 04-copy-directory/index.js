const { error } = require('console');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
copyDir();





function copyDir() {

  fs.access('04-copy-directory/files-copy', err => {
    if (err) {
      fs.mkdir('04-copy-directory/files-copy', err => {
        if (err) {
          throw err;
        }
      });
      fs.readdir('04-copy-directory/files/',
      { withFileTypes: true },
      (err, files) => {
        files.forEach(file => {
          addFile(file);
        })

      }
    )


    } else {
      fs.readdir('04-copy-directory/files-copy/',
        { withFileTypes: true },
        (err, files) => {
          if (err) console.log(err);

          if (files.length === 0) {
            fs.readdir('04-copy-directory/files/',
              { withFileTypes: true },
              (err, files) => {
                files.forEach(file => {
                  addFile(file);
                })

              }
            )
          }

          else if(files.length !== 0) {
            files.forEach(file => {
              
              fs.unlink('04-copy-directory/files-copy/' + file.name, err => {
                if (err) console.log(err);
               
              })

            });

            fs.readdir('04-copy-directory/files/',
            { withFileTypes: true },
            (err, files) => {
              files.forEach(file => {
                addFile(file);
              })

            }
          )

          };

        })

    }

  })





  function addFile(nameFile) {
   
    fs.copyFile(`04-copy-directory/files/${nameFile.name}`, `04-copy-directory/files-copy/${nameFile.name}`, err => {
      if (err) console.log(err);
    })

  
  }



}