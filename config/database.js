const mongoose=require('mongoose')

const configureDb = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/questions')
    .then(()=>{
        console.log('connected')
    })
    .catch(()=>{
        console.log('not connected')
    })
}

module.exports = configureDb