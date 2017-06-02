var express = require("express");
var nieuws = express.Router();

nieuws.get('/items/:id', function(req, res) {
  var nieuwsFile = req.app.get('nieuwsFile');
  var id = req.params.id;
  var teller = 0;
  var item = "";
  while (teller < nieuwsFile.articles.length ) {
    if (nieuwsFile.articles[teller].id == id) {
      item = nieuwsFile.articles[teller];
    }
    teller++;
  }
  if (item !== "") {
    res.render("nieuws", {
      item: item
    });
  } else {
    res.render("404", {});
  }
});

module.exports = nieuws;
