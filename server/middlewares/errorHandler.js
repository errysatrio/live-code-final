module.exports = function errorHandler (err,req,res,next) {
    const stringifiedErr = JSON.stringify(err)

    if(err.code === 404) {
        res.status(err.code.json({
            message:err.resources + 'not found'
        }))
    } else if (stringifiedErr.indexOf('SequelizeValidationError')!== -1) {
        const errors = []
        err.errors.map(el => errors.push(el.message))
        res.status(400).json({errors})
    } else {
        console.log(err)
        res.send(err)
    }
}