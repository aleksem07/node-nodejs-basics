import fs from 'fs';
const stdin = process.stdin;
const stdout = process.stdout;

const write = async () => {
  const writableStream = fs.createWriteStream('src/streams/files/fileToWrite.txt');

  stdout.write('Hello! Type something...\n')
  stdout.write('Press ctrl + C or type "exit" to stop\n')
  stdout.write('\n')

  stdin.on('data', (data) => {
    if (data.toString().trim() === 'exit') {
      console.log('\nGoodbye!');
      process.exit();
    }

    writableStream.write(data);
  });

  process.on('SIGINT', () => {
    console.log('\n\nGoodbye!');
    process.exit();
  })

};

await write();