const express = require('express')
const app = express()
app.use(express.static(`${__dirname}/public`))
// app.get('/', function (req, res) {
//     let output = {
//         name: 'alejo',
//         years: 23,
//         url: req.url
//     }
//     // res.send('Hello World');
//     res.send(output);
// })

app.listen(3000,()=>{
    console.log('Listen 3000');
})