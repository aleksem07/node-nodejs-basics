import path, { dirname } from 'path';
import { Worker } from 'node:worker_threads';
import os from 'os';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const result = [];

  const createWorker = (i) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(path.join(__dirname, 'worker.js'), 
      {workerData: { value: i }}
      );
      
      worker.on('error', (error) => {
        result.push({ status: 'error', data: null });
        reject(error);
      });

      worker.on('message', (message) => {
        result.push({ status: 'resolved', data: message.toString() });
        resolve();
      });

      worker.on('exit', () => {
        if (i === 10 + os.cpus().length) {
          process.stdout.write(JSON.stringify(result, '', ' '));
          process.stdout.write('\n')
        }
      });
    });
  };

  try {
    await Promise.all(
      Array.from({ length: os.cpus().length + 1 }, (_, i) => createWorker(i + 10))
    );
  } catch (error) {
    console.error(error);
  }
};


await performCalculations();