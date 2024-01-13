import fs from 'fs';

const FOLDER = 'src/fs/files';

const list = async () => {
  try{
    if(!fs.existsSync(FOLDER)) {
      throw new Error('FS operation failed');
    }

    fs.readdir(FOLDER, (err, data) => {
      if (err) throw err;
      data.map(file => console.log(file))
    })

  } catch(err) {
    throw err;
  }
};

await list();