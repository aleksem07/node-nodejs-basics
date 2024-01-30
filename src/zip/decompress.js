import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import path, { dirname } from 'path';
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const zipFilePath = path.join(__dirname, 'files', 'archive.gz');
const decompressFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');

const gunzip = createGunzip();
const source = createReadStream(`${zipFilePath}`);
const dest = createWriteStream(`${decompressFilePath}`);

const decompress = async () => {
  pipeline(source, gunzip,dest, (err) => {
    if (err) throw err;
    console.log('File decompressed');
  });
};


await decompress();