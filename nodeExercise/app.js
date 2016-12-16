
const express = require('express');
const app = express();

// to access static files in a directory ' public '
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello From Express');
});

// app.use('/users/:id',function (req, res, next){

//     console.log('Time: ', Date.now());
//     console.log(' Request Url : ', req.originalUrl);

//     next()
// }, function (req, res, next){
//     console.log('Request Type :', req.method);
//     next()
// })

app.listen(3000, () => {
    console.log('Listening on port 3000');
})