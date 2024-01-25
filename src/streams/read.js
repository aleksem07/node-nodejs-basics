import fs from 'fs';
const stdout = process.stdout;

const read = async () => {
  const text = fs.createReadStream('src/streams/files/fileToRead.txt', 'utf8');
  text.pipe(stdout);
  text.on('end', () => stdout.write('\n'));
};

await read();