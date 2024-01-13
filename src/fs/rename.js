import fs from 'fs';

const WRONG_FILE = 'src/fs/files/wrongFilename.txt';
const PROPER_FILE = 'src/fs/files/properFilename.txt';

const rename = async () => {
    try {
      if (fs.existsSync(PROPER_FILE) || !fs.existsSync(WRONG_FILE)) {
        throw new Error('FS operation failed');
      }

      fs.rename(WRONG_FILE, PROPER_FILE, err => {
        if (err) throw err;
        console.log('File renamed');
      })
    } catch(err) {
      throw err;
    }
};

await rename();