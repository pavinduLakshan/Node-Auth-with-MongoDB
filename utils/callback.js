function callback(res,err,status,data){
    if(err){
        console.log(err)
    }
    res.status(status).send(data)
}

module.exports = {callback}