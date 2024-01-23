const parseEnv = () => {
  const ENV_RSS_COUNT = 4;
  const PREFIX = 'RSS_';
  const env = process.env;
  
  for (let i = 0; i < ENV_RSS_COUNT; i++) {
    env[`${PREFIX}name${i+1}`] = `value${i+1}`;
  }

  for (let key in env) {
    if (key.startsWith(PREFIX)) {
      console.log(`${key} = ${env[key]}`);
    }
  }
};

parseEnv();