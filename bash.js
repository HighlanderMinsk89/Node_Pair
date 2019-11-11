process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  const path = process.env.PWD;

  if (cmd === 'pwd') {
    process.stdout.write(path);
    process.stdout.write('\nprompt > ');
  } else {
    process.stdout.write('\nprompt > ');
    process.stdout.write('You typed: ' + cmd);
  }
});
