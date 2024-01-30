import { spawn } from 'node:child_process';
import path, { dirname } from 'path';
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', [path.join(__dirname, 'files', 'script.js'), ...args]);
  
  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.on('data', (data) => {
    process.stdout.write(data.toString());
  });

  childProcess.stderr.on('error', (error) => {
    console.error(`Error in child process: ${error.message}`);
  });

  childProcess.on('close', (code) => {
    console.log(
        `child process terminates with code ${code}`
    );
  });
};

spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3', 'someArgument4']);