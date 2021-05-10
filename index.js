require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.send ('hola mundo');
})

app.get ( '/usuario', function(req, res) {
    res.send('Leonardo Cuello')
})

app.listen(port, () => {
    console.log(`Server started - PORT ${port}`);
});