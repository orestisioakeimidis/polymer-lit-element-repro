# Polymer and LitElement

The purpose of this repository is to reproduce an error when compiling to ES5 and using minification.

[Related issue](https://github.com/Polymer/tools/issues/724)

## Steps to reproduce:

### Install dependencies

```
$ npm i
```

### Build the application

```
$ npm run build
```

### Run the unminified version

There is no error when running the unminifed version.

```
$ npm run serve:es5
```

### Run the minified version

Take a look at the dev console and you will see the error when running the minified version.

```
$ npm run serve:es5-minified
```
