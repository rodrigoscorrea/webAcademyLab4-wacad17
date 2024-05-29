/* eslint-env node */
const express = require('express');
const handlebars = require("express-handlebars")

const app = express();

app.engine("handlebars", handlebars.engine()); //express agr reconhece a engine
app.set("view engine","handlebars");
app.set("views", `${__dirname}/views`);

app.use("/img", express.static(`${__dirname}/public/img`))
app.use("/css", express.static(`${__dirname}/public/css`))
app.use('/js',express.static(`${__dirname}/public/js`));
app.get('/', (req, res) => {
  res.render('index', {
    layout: false
  });
});

app.listen(8080, () => {
  console.log('Rodando na porta 8080');
});
