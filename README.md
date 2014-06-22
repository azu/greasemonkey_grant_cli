# greasemonkey_grant_cli

Command line tools which generate `// @grant GM_xmlhttpRequest` from greasemonkey.user.js file.

* listing GM_* API used in greasemonkey.user.js file

## Installation

``` sh
npm install -g greasemonkey_grant_cli
```

## Usage

```
$ greasemonkey_grant file.user.js
```

Example :

``` sh
$ greasemonkey-grant github-display-package-dependencies.user.js
// @grant GM_addStyle
// @grant GM_xmlhttpRequest%
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT