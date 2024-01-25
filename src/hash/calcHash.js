import { createHash } from 'crypto';

const hash = createHash('sha256');

const calculateHash = async () => {
  hash.on('readable', () => {
    const data = hash.read();

    if (data) {
      console.log(data.toString('hex'));
    }
  })

  hash.write('./files/fileToCalculateHashFor.txt');
  hash.end();
};

await calculateHash();