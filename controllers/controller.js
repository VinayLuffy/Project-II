const path = require("path");
const { spawn } = require('child_process');

exports.home = async (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};

exports.detect = async (req, res, next) => {
  let dataToSend;

  // spawn new child process to call the python script
  const python = spawn('python', ['./parser/index.py', req.body.tag, req.body.count]);
  // collect data from script
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend)
  });

  // res.json({
  //   "content": req.body.description
  // });
};