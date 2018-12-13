const express = require('express');
const app = express();


app.use(express.urlencoded({extended: true}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('index');
});


app.post('/invite', (req, res) => {
  const {title, description, image} = req.body;
  res.redirect(`/invitation/?title=${title}&description=${description}&image=${image}`);
});

app.get('/invitation', (req, res) => {

  res.render('invitation', req.query)
});

app.get('/muestra', (req, res) => {

  res.render('muestra')
  // res.render('invitation', {...req.query, image: images[req.query.image]})
});

app.listen(3000);
