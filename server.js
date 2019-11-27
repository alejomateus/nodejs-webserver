const express = require('express')
const app = express();
const hbs = require('hbs');
app.use(express.static(`${__dirname}/public`))
hbs.registerPartials(`${__dirname}/views/partials`)
app.set('view engine','hbs');
app.get('/',  (req, res) =>{
    res.render('home',{
        name: 'Alejandro',
        year: new Date().getFullYear()
    });
})
app.get('/about',  (req, res) =>{
    res.render('about',{
        name: 'Alejandro',
        year: new Date().getFullYear()
    });
})
app.listen(3000,()=>{
    console.log('Listen 3000');
})