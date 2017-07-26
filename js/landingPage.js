/**
* Created by nickhoughton on 6/20/17.
*/

var game, size;
var clouds = [], numClouds = 5, sun, day = true, lastTime = 0, timePattern = 10000, transitionTime = 5000;
var numCloudImages = 9;
function main() {
  $("night").css('opacity', 1.0);
  size = getViewport();
  game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'body', null, true);
  game.state.add('mainState', mainState);
  game.state.start('mainState');
  requestAnimationFrame(animate);
}

function addCloud(i, n){
  // var x = randomFloat(-game.width, game.width, 0);
  // var y = randomFloat(0, game.height, 0);
  var sx = randomFloat(0.1, 0.4, 2);
  clouds[i] = game.add.sprite(0, 0, 'cloud' + n);
  clouds[i].position.y = randomFloat(0, game.height, 0);
  clouds[i].position.x = randomFloat(-game.width, game.width, 0);
  game.physics.enable(clouds[i], Phaser.Physics.ARCADE);
  clouds[i].body.velocity.x = randomFloat(45, 55, 0);
  clouds[i].body.velocity.y = randomFloat(-5, 5, 0);
  clouds[i].scale.setTo(sx, sx);
  clouds[i].anchor.setTo(0.5,0.5);
}

function addSun(){
  sun = game.add.sprite(0,0, 'sun');
  sun.position.x = 0;
  sun.position.y = 0;
  game.physics.enable(sun, Phaser.Physics.ARCADE);
  sun.body.velocity.x = 10;
  sun.body.velocity.y = 1;
  sun.scale.setTo(0.1, 0.1);
  sun.anchor.setTo(0.5,0.5);
}

var mainState = {
  preload: function(){
    game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    game.scale.setResizeCallback(function() {
      game.scale.setMaximum();
    });
    game.stage.disableVisibilityChange = true;
    game.canvas.className += "day";
    for(let i = 1; i <= numCloudImages; ++i){
      let n = 'cloud' + i;
      game.load.image(n, '/images/' + n + '.png');
    }
    game.load.image('sun', '/images/sun.png');

  },
  create: function(){
    addSun();
    for(let i = 0; i < numClouds; ++i){
      addCloud(i, randomFloat(1, numCloudImages, 0));
    }

  },
  update:function(){
    sun.angle += 0.1;
    for(let i = 0; i < numClouds; ++i){
      if((clouds[i].position.x > (game.width + clouds[i].width))
          || (clouds[i].position.y > (game.height + clouds[i].height))
              || (clouds[i].position.y < (-clouds[i].height))){
        clouds[i].position.x = -clouds[i].width;
        clouds[i].position.y = randomFloat(0, game.height, 0);
        clouds[i].body.velocity.y = randomFloat(-5, 5, 0);
      }
    }
    if((sun.position.x > (game.width + sun.width)) || (sun.position.y > (game.height + sun.height))){
      sun.position.x = -sun.width;
      sun.position.y = randomFloat(sun.height, (game.height - sun.height),0);
      sun.body.velocity.x = randomFloat(45, 60, 0);
      sun.body.velocity.y = randomFloat(-7, 7, 0);
    }
  }
}

function fadeNightOut(){
  $("#night").fadeTo(transitionTime, 0, function() {
    // Animation complete.
  });
  $("#wrapper").animate({
    color: '#46433A'
  }, transitionTime);
}
function fadeNightIn(){
  $("#night").fadeTo(transitionTime, 1, function() {
    // Animation complete.
  });
  $("#wrapper").animate({
    color: 'rgb(144, 138, 120)'
  }, transitionTime);
}
function toggleDayNight(){
  if(day) {
    fadeNightIn();
  }else{
    fadeNightOut()
  }
  day = !day;
}
function animate(currentTime){
  if(day && $(night).css('opacity') == 1){
    lastTime = currentTime;
  }
  if(!day && $(night).css('opacity') == 0){
    lastTime = currentTime;
  }
  if(currentTime >= lastTime + timePattern){
    toggleDayNight();
    lastTime = currentTime;
  }
  requestAnimationFrame(animate);
}

window.onload = main;

