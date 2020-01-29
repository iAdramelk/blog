const Prism = require('prismjs');

// Make sure the $ part of the command prompt in shell
// examples isn't copiable by making it an 'input' token.
const rInput = /^\$\s+$/m;
const rLineSplit = /(?<=\n)/; // split lines without losing the \n
Prism.hooks.add('after-tokenize', env => {
  if (env.language !== 'dvc') return;

  env.tokens = env.tokens.flatMap(contents => {
    if (typeof contents === 'string' && rInput.test(contents)) {
      // one or more lines contain a prompt (`$ `)
      return contents.split(rLineSplit).map(line => {
        if (rInput.test(line)) {
          return new Prism.Token('input', line, null, line, false);
        }
        return line;
      });
    }
    return [contents];
  });
});
