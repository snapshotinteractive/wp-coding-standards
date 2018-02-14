# Editor Configuration for PHP

## Prerequisites
1. PHP 5.3 or higher installed on your system
2. [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx)
1. [Node.js](https://nodejs.org/en/) (>=4.x)
2. npm version 2+ (or [Yarn](https://yarnpkg.com/en/))

## Setup
1. Install *PHP_CodeSniffer* globally. `composer global require "squizlabs/php_codesniffer=*"`
2. Make sure you have the composer bin dir in your PATH. The default value is `~/.composer/vendor/bin/`, but you can check the value that you need to use by running `composer global config bin-dir --absolute`.
  * You can check your PATH first by running `echo $PATH`, then look for the composer directory.
  * Add the directory to your PATH by running `export PATH=$PATH: ~/.composer/vendor/bin/`.
3. Install the [WordPress Coding Standards for PHPCS](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards#installation) in a globally available directory on your machine.
  * Example: `cd ~/projects`, then `git clone -b master https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards.git wpcs`.
  * Once you've cloned the repo, add the path to your PHP_CodeSniffer configuration.
    * From the directory in which PHPCS is installed, you need to run `./bin/phpcs --config-set installed_paths ~/projects/wpcs`.
    * Finally, you'll need to add the PHPCS scripts directory to your PATH variable. So if PHPCS is installed in '~/projects', you would add `~/projects/phpcs/bin` to PATH using the same method as noted above.
    * Form more information, see the [WPCS GitHub](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards#installation).
4. Install the PHPCS plugin for the editor of your choice.
  * [Sublime Text](https://github.com/benmatselby/sublime-phpcs)
  * [Atom](https://atom.io/packages/linter-phpcs)
  * [Vim](https://github.com/bpearson/vim-phpcs)
  * [VS Code](https://marketplace.visualstudio.com/items?itemName=ikappas.phpcs)
  * PHPCS is included in PhpStorm.
5. Copy the example `.phpcs.example.xml` configuration file in this repo into the root of your project, and remove `example` from the filename.
6. Configure your config file by setting the appropriate meta information relative to your project, including the project name, description, and (most importantly) the text domain that will match the slug and directory set for your theme. You may also need to configure it further with any files or directories you wish PHPCS to ignore (please only ignore libraries or vendor files unless you have a compelling reason to go further than that).
7. PHPCS is a great tool but it isn't perfect. If it flags an error in your file that you feel is actually correct, you can add a whitelist comment to the line on which the error appears. See whitelisting flags for [WPCS](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/wiki/Whitelisting-code-which-flags-errors) and for [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Advanced-Usage#ignoring-parts-of-a-file).
  * Please use this sparingly and only with good reason. If you need to leave an error in place for the sake of speed, please leave a note in the comments using `TODO` so that you or another developer can quickly find errors that need to be fixed later.
