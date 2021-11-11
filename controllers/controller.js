const path = require("path");

exports.home = async (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};

exports.detect = async (req, res, next) => {
  res.json({
    "content": req.body.description
  });
};