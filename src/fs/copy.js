import fs from 'fs';

const PATH_MAIN = 'src/fs/files';
const PATH_TO_COPY = 'src/fs/files_copy';

const copy = async () => {
  try {
    if (!fs.existsSync(PATH_MAIN ) || fs.existsSync(PATH_TO_COPY)) {
      throw new Error('FS operation failed');
    }
    fs.cp(PATH_MAIN, PATH_TO_COPY, { recursive: true }, (err) => {
      if (err) throw err;
      console.log('File copied');
    })
  } catch(err) {
    throw err;
  }
}

await copy();
