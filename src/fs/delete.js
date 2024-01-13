import fs from 'fs';

const PATH = 'src/fs/files/fileToRemove.txt';

const remove = async () => {
    try {
      if(!fs.existsSync(PATH)) {
        throw new Error('FS operation failed');
      }

      fs.unlink(PATH, (err) => {
        if (err) throw err;
        console.log('File removed');
      } )

    } catch(err) {
      throw err;
    }
};

await remove();