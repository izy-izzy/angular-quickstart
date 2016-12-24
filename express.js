var express = require('express')
var app = express()

var PORT = process.env.PORT || 8080;

app.get('*', function(req, res){
    path = req.params[0] ? req.params[0] : 'index.html';
    res.sendFile(path, {root: '/'});
});

app.listen(PORT, function () {
  console.log('Server listening on port ', PORT)
})