---
title: Combining Jekyll, Phaser and Browserify
category: webgl
meta: An old method for improving texture resolution
layout: Post
published: false
---
1. Create new Jekyll Blog
2. npm init
3. npm install --save-dev phaser
4. Make main.js
5. add:
       window.PIXI = require('phaser/build/custom/pixi')
       window.p2 = require('phaser/build/custom/p2')
       window.Phaser = require('phaser/build/custom/phaser-split')
6.
