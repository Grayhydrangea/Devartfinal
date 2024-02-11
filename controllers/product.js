const mysql = require('mysql');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

exports.create = (req, res) => {
  const { category, artworkname, description, image} = req.body;
  let searchTerm = req.body.search;

  connection.query('INSERT INTO artwork SET category = ?, artworkname = ?, description = ?, image = ?', [category, artworkname, description, image], (err, rows) => {
    if (!err) {
      res.render('upload', { alert: 'Artwork added successfully.' });
    } else {
      console.log(err);
    }
    console.log('The data from Artwork table: \n', rows);
  });
}