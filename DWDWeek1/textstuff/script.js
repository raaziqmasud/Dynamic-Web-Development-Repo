const fs = require ('fs')

fs.readFile('file.txt', 'utf-8', (err, data)=> {

            if (err) throw err;
            console.log(data);
            var lines = data.split('\n');
            for(var line = 0; line < lines.length-3; line++){
                console.log(lines[line]);     

                
                
}});

