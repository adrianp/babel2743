# babel2743
This is a test case for Babel.js issue [#2743](https://github.com/babel/babel/issues/2743)

##To install and run:

```
$ git clone git@github.com:adrianp/babel2743.git
$ cd babel2743
$ npm install
$ babel app.js
```

On Babel `6.0.15 (babel-core 6.0.16)` you should get the following stack:

```
AssertionError: app.js: false == true
    at explodeViaTempVar (babel2743/node_modules/babel-preset-es2015/node_modules/babel-plugin-transform-regenerator/lib/emit.js:926:12)
    at babel2743/node_modules/babel-preset-es2015/node_modules/babel-plugin-transform-regenerator/lib/emit.js:1042:20
    at Array.forEach (native)
    at Emitter.Ep.explodeExpression (babel2743/node_modules/babel-preset-es2015/node_modules/babel-plugin-transform-regenerator/lib/emit.js:1041:14)
    at Emitter.Ep.explodeExpression (babel2743/node_modules/babel-preset-es2015/node_modules/babel-plugin-transform-regenerator/lib/emit.js:1156:12)
    at Emitter.Ep.explodeStatement (babel2743/node_modules/babel-preset-es2015/node_modules/babel-plugin-transform-regenerator/lib/emit.js:403:10)
    at babel2743/node_modules/babel-preset-es2015/node_modules/babel-plugin-transform-regenerator/lib/emit.js:386:12
    at Array.forEach (native)
    at Emitter.Ep.explodeStatement (babel2743/node_modules/babel-preset-es2015/node_modules/babel-plugin-transform-regenerator/lib/emit.js:385:22)
    at Emitter.Ep.explode (babel2743/node_modules/babel-preset-es2015/node_modules/babel-plugin-transform-regenerator/lib/emit.js:333:17)
```



