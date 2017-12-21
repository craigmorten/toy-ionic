const exec = require('child_process').exec;
const isWin = /^win/.test(process.platform);

let ionic;
let protractor;

function log(msg) {
  if (msg) {
    if (msg.replace) {
      console.log(msg.replace(/\n$/, ''));
    } else {
      console.log(msg);
    }
  }
}

function kill(pid, signal = 'SIGKILL', callback = function () {}) {
  try {
    process.kill(pid, signal);
  } catch (e) {}
  callback();
}

function cleanup(code) {
  log(`\nReceived exit code ${code}`);
  if (code === 0) {
    log('SUCCESS!\n\n');
  } else {
    log('FAILED\n\n');
  }

  if (protractor && protractor.pid) {
    kill(protractor.pid);
  }
  if (ionic && ionic.pid) {
    kill(ionic.pid);
  }

  process.exit();
}

function launchProtractor() {
  log('Launching protractor...\n\n');

  // Launch protractor
  protractor = exec('protractor ./test/protractor.conf.js');
  protractor.stdout.on('data', (data) => {
    log(data);
  });

  protractor.stderr.on('data', (data) => {
    log(data);
  });

  protractor.on('close', (code) => {
    cleanup(code);
  });
}

function launchIonic() {
  log('Launching ionic...');

  // Serve ionic
  ionic = exec('ionic serve --no-open');

  ionic.stdout.on('data', (data) => {
    log(data);
    if (data.indexOf('[OK] Development server running!') > -1) {
      launchProtractor();
    }
  });

  ionic.stderr.on('data', (data) => {
    log(data);
  });

  ionic.on('close', (code) => {
    cleanup(code);
  });
}

launchIonic();
