import fs from 'fs';
import path from 'path';

const pathMain = 'src/fs/files';
const pathToCopy = 'src/fs/files_copy';

const copy = async () => {
  try {
    if (!fs.existsSync(pathMain ) || fs.existsSync(pathToCopy)) {
      return console.log('FS operation failed');
    }
    fs.cp(pathMain, pathToCopy, { recursive: true }, (err) => {
      if (err) throw err;
      console.log('File copied');
    })
  } catch (err) {
    console.error(err);
  }
}

await copy();
