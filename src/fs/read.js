import fs from 'fs';

const PATH = 'src/fs/files/fileToRead.txt';

const read = async () => {
  try{
    if(!fs.existsSync(PATH)) {
      throw new Error('FS operation failed');
    }
    fs.readFile(PATH, 'utf8', (err, data) => {
      if (err) throw new Error('FS operation failed');
      console.log(data);
    })
  } catch(err) {
    throw err;
  }
};

await read();