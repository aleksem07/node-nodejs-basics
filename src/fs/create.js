import fs from 'fs';

const PATH = 'src/fs/files/fresh.txt';
const CONTENT = 'I am fresh and young';

const create = async () => {
  try {
    if (fs.existsSync(PATH)) {
      return console.log('FS operation failed');
    }

    fs.writeFile(PATH, CONTENT, (err) => {
      if (err) throw err;
      console.log('File created');
    })
  } catch (err) {
    console.error(err);
  }
};

await create();