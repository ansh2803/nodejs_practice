const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// app.get('/',function(req, res) {
//     res.send('Hello World');
// });

app.get('/',function(req, res) {
    fs.readdir(`./files`, (err, files) => { //fs.readdir(path[,options],callback)
        // console.log(files);
        res.render('index', { files: files });
    })
    
});

app.get('/files/:file',function(req, res) {
    fs,fs.readFile(`./files/${req.params.file}`, 'utf-8', (err, data) => {
        // console.log(data.toString());
        res.render('show');
    });
});

app.get('/create', (req, res) => {
    res.render('create');
})


app.post('/create', (req, res) => {
    // console.log(req.body);
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, (err) => {
        res.redirect('/');
    });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});