const authorization = (req,res,next) => {
    const {role} = req.headers
    if(role==='admin')
    {
        next()
    }
    else{
        res.json({notice:'Unable to access data'})
    }
}

module.exports = authorization