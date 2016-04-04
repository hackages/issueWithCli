Clone this repository: `git clone https://github.com/hackages/issueWithCli.git`

Move inside that directory: `cd isseWithCli`

Install dependencies: `npm install`

#### npm link

The first test is to use `npm link`

After running `npm link`, you should now be able to type: `issueWithCli` which should just say *Hello world*

#### npm install -g

After running `npm install`, you should now be able to type: `issueWithCli` but this crashes

// Here is the output

(function (exports, require, module, __filename, __dirname) { import path from 'path';
                                                              ^^^^^^
SyntaxError: Unexpected token import
    at exports.runInThisContext (vm.js:53:16)
    at Module._compile (module.js:387:25)
    at Module._extensions..js (module.js:422:10)
    at Object.require.extensions.(anonymous function) [as .js] (/usr/local/lib/node_modules/hackages/node_modules/babel-register/lib/node.js:134:7)
    at Module.load (module.js:357:32)
    at Function.Module._load (module.js:314:12)
    at Module.require (module.js:367:17)
    at require (internal/module.js:16:19)
    at Object.<anonymous> (/usr/local/lib/node_modules/hackages/bin/index.js:11:1)
    at Module._compile (module.js:413:34)

  Anyone has encountered this issue before?

  In summary, files are not transformed when using a global install.
