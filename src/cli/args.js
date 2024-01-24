const parseArgs = () => {
  const args = process.argv.slice(2);
  const options = [];
  const hasValidArguments = args.some(arg => arg.startsWith('--'))

    if (args.length < 2 || !hasValidArguments) {
    console.error('Invalid number of command line arguments');
    return;
  }

  args.map((arg, i, array) => arg.startsWith('--') && 
                              array[i+1] &&
                              !array[i+1].startsWith('--') &&
                              options.push(`${arg} is ${array[i+1]}` || `${arg} is undefined`));

  console.log(options.join('\n') || 'Invalid number of command line arguments');
};

parseArgs();