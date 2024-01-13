import fs from 'fs';

const WRONG_FILE = 'src/fs/files/wrongFilename.txt';
const PROPER_FILE = 'src/fs/files/properFilename.txt';

const rename = async () => {
    try {
      if (fs.existsSync(PROPER_FILE) || !fs.existsSync(WRONG_FILE)) {
        return console.log('FS operation failed');
      }

      fs.rename(WRONG_FILE, PROPER_FILE, err => {
        if (err) throw err;
        console.log('File renamed');
      })
    } catch(err) {
      console.error(err);
    }
};

await rename();