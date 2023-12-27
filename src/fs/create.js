import fs from 'fs';

const path = 'src/fs/files/fresh.txt';

const create = async () => {
  try {
    await fs.promises.access(path, fs.constants.F_OK);
    console.log('File already exists');
  } catch {
    try {
      fs.writeFile(path, 'I am fresh and young', (err) => {
        if (err) throw console.error('FS operation failed');
        console.log('File created');
      })
    } catch (err) {
      console.error(err);
    }
  }
};

await create();