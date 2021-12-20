const path = require("path");
const { spawn } = require('child_process');

exports.home = async (req, res, next) => {
  res.render("index.ejs");
};

exports.result = async (req, res, next) => {
  try {
    let dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['./parser/index.py', req.body.tag]);
    // collect data from script
    python.stdout.on('data', function (data) {
      console.log('Pipe data from python script ...');
      dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`);
      // send data to browser
      res.render("result.ejs", { resultData: dataToSend });
    });
  } catch (error) {
    res.json({
      error: {
        code: 500,
        message: error
      }
    });
  }
};
