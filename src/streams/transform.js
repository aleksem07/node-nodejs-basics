import { Transform } from 'stream';

const stdin = process.stdin;
const stdout = process.stdout;

const transform = async () => {
  stdout.write('Hello! Type something...\n')
  stdout.write('Press ctrl + C or type "exit" to stop\n')
  stdout.write('\n')

  const transformer = new Transform({
    transform(chunk, _, callback) {
      if (chunk.toString().trim() === 'exit') {
        console.log('\nGoodbye!');
        process.exit();
      }

      const reversedChunk = chunk.toString().split('').reverse().join('');

      this.push(reversedChunk + '\n');

      callback();
    },
  });
  
  stdin.pipe(transformer).pipe(stdout);

  process.on('SIGINT', () => {
    console.log('\n\nGoodbye!');
    process.exit();
  })
};

await transform();