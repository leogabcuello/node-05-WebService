const http = require ('http');

http.createServer((req, res) => {
    
    // console.log("hola mundo");
     
    // res.writeHead(200, {'Content-type' : 'aplication/json'});
    // const user = {
    //     name: 'leonardo',
    //     id: 123
    // }
    // res.write(JSON.stringify(user));
    res.setHeader('Content-Disposition', 'attachment; filename=usuarios.cvs');
    res.writeHead(200, { 'Content-Type': 'aplication/cvs'});
    // revisar cual es el separador de columnas
    res.write('id,name\n12;leonardo\n23;marta');
    res.end();

}).listen(3000); 
