import fs from 'fs';

const PATH = 'src/fs/files/fresh.txt';
const CONTENT = 'I am fresh and young';

const create = async () => {
  try {
    if (fs.existsSync(PATH)) {
      throw new Error('FS operation failed');
    }

    fs.writeFile(PATH, CONTENT, (err) => {
      if (err) throw err;
      console.log('File created');
    })
  } catch(err) {
    throw err;
  }
};

await create();