const fs = require ('fs')

fs.readFile('file.txt', 'utf-8', (err, data)=> {

            if (err) throw err;
            console.log(data);
            fs.writeFile('file.html', '<!DOCTYPE html><html><body><p>' + data + '</p></body></html>', (err) => {
                console.log("file.txt is transformed to file.html");               
})})

