const express = require('express');
const path = require('path');
const hbs = require('hbs');



const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


console.log(viewsPath);

//Path to the views directory
app.use(express.static(publicDirectoryPath));



//Handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.get("", (req, res)=>{
    res.render('index')
})

app.get("/about", (req, res)=>{
    res.render('about')
})

app.get("/help", (req, res)=>{
    res.render('help')
})

app.get("*", (req, res)=>{
    res.render('not-found')
})



port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Server running on http://localhost:${port}`);
});