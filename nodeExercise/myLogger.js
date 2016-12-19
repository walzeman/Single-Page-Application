

module.exports = function logger(req,res,next){

     req.requestTime = Date.now()

    // res.end();
     res.on('finish', () => {

        var endTime = Date.now();
        console.log(' Request time : '+ req.requestTime)
        console.log(' Response end time : '+ endTime)
        console.log('')
        console.log(' Report: ')
        console.log('-------------------------------------')
        console.log('    Req to Res Time: ', endTime - req.requestTime +' ms.');
        console.log('    Request Url : ', req.originalUrl);
        console.log('    Request Type :', req.method);
     })

        next()
    }