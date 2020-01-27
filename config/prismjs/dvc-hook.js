const Prism = require('prismjs');

// Make sure the $ part of the command prompt in shell
// examples isn't copiable by making it an 'input' token.
Prism.hooks.add('after-tokenize', env => {
  if (env.language !== 'dvc') return;

  const { tokens } = env;
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].type === 'line' && /\$\s?/.test(tokens[i].content[0])) {
      const old = tokens[i].content[0];
      tokens[i].content[0] = new Prism.Token('input', '$ ', null, '$ ', false);
    }
  }
});
