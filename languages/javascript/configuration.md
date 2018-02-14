# Editor Configuration for JavaScript

## Prerequisites
1. [Node.js](https://nodejs.org/en/) (>=4.x)
2. npm version 2+ (or [Yarn](https://yarnpkg.com/en/))

## Setup
1. Install the *eslint* plugin for the editor of your choice.
  * [Sublime Text](https://github.com/SublimeLinter/SublimeLinter-eslint)
  * [Atom](https://atom.io/packages/linter-eslint)
  * [Vim](https://github.com/vim-syntastic/syntastic/tree/master/syntax_checkers/javascript)
  * [VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  * [Jet Brains Products](https://plugins.jetbrains.com/plugin/7494-eslint) (WebStorm, PhpStorm, etc.)
  * Additional resources: [https://eslint.org/docs/user-guide/integrations](https://eslint.org/docs/user-guide/integrations)
2. Install eslint locally in your project. `npm i -D eslint`
  * If you would like to use eslint globally, you can also use `npm i -g eslint`, but you'll still need eslint as a dependency in your project.
3. Install [`eslint-config-wordpress`](https://github.com/WordPress-Coding-Standards/eslint-config-wordpress) in your project `npm i eslint-config-wordpress`.
4. Copy the example `.eslintrc.example.js` configuration file in this repo into the root of your project, and remove `example` from the filename. If you need ES5 support, use `es5/.eslintrc.example.json` instead.
4. Copy the example `.eslintignore.example` configuration file in this repo into the root of your project, and remove `example` from the filename. You may need to configure this file further with any additional files or directories you wish eslint to ignore (please only ignore libraries or vendor files unless you have a compelling reason to go further than that).
5. Eslint is a great tool but it isn't perfect. If it flags an error in your file that you feel is actually correct, you can disable eslint within a file using an inline comment. See disabling rules flags for eslint [here](https://eslint.org/docs/user-guide/configuring.html#disabling-rules-with-inline-comments).
  * Please use this sparingly and only with good reason. If you need to leave an error in place for the sake of speed, please leave a note in the comments using `TODO` so that you or another developer can quickly find errors that need to be fixed later.
