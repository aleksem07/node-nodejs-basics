import { Transform, pipeline, finished } from 'stream';

const stdin = process.stdin;
const stdout = process.stdout;

const transform = async () => {
  stdout.write('Hello! Type something...\n')
  stdout.write('Press ctrl + C or type "exit" to stop\n')
  stdout.write('\n')

  const transformer = new Transform({
    transform(chunk, _, cb) {
      if (chunk.toString().trim() === 'exit') {
        console.log('\nGoodbye!');
        process.exit();
      }

      const reversedChunk = chunk.toString().trim().split('').reverse().join('');

      cb(null, reversedChunk + '\n');
    },
  });
  
  pipeline(
    stdin,
    transformer,
    stdout,
    err => {
      console.log(`Error: ${err}`)
  })

  process.on('SIGINT', () => {
    console.log('\n\nGoodbye!');
    process.exit();
  })
};

await transform();