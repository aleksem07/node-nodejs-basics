import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = path.join(__dirname, 'files', 'archive.gz');

const gzip = createGzip();
const source = createReadStream(`${filePath}`);
const destination = createWriteStream(`${archivePath}`);

const compress = async () => {
  pipeline(source, gzip, destination, (err) => {
    if (err) throw err;
    console.log('File compressed');
  });
};

await compress();