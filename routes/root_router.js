var express = require("express");
var root = express.Router();

root.get('/', function(req, res) {
  res.render("index", {
    venues: req.app.get('venues').venues,
    rooms: req.app.get('rooms').rooms,
    artwork: req.app.get('artworksFile').artworks
  });
});

module.exports = root;
