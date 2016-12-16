

const express = require('express');

const app = express();
const router = express.Router();

// middleware is attached to router rather than to app

router.use(function(req, res, next){
    console.log('Time', Date.now());
    next()
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
