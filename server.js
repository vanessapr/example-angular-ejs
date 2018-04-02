const path = require('path');
const fs = require('fs');
const express = require('express');
const ejs = require('ejs');

const DIST_FOLDER = path.join(process.cwd(), 'dist');
const PORT = process.env.PORT || 8000;

const app = express();

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('views', DIST_FOLDER);
app.get('*.*', express.static(DIST_FOLDER));


// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { initialData: 'Angular from express' });
});

app.listen(PORT, () => {
  console.info(`Running on port:${PORT}`);
});