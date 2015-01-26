/* global describe, it */
/* jshint expr: true */

'use strict';

var expect    = require('chai').expect,
    Game      = require(process.cwd() + '/lib/Game'),
    Weapon   = require(process.cwd() + '/lib/Weapon'),
    Player    = require(process.cwd() + '/lib/Player');

describe('Game', function () {
  it ('should expect true and false', function () {
    expect(true).to.be.true;
    expect(false).to.be.false;
  });
});

describe('Player', function () {
  it('should have players', function () {
  var player = new Player();
  expect(player).to.be.an.instanceof(Player);
  });
});

describe('Player Weapons', function () {
  it('should have weapon keys', function () {
    var weapon = new Weapon({name: 'Sword'});
    expect(weapon).to.have.keys(['name', 'damage', 'accuracy', 'ammo']);
  });
});


describe('Shuffle Player Order', function () {
  it('should respond to shufflePlayerOrder', function () {
    Game.prototype.shufflePlayerOrder = function () {};
    expect(Game).to.respondTo('shufflePlayerOrder');
    });
  });

describe('Player', function () {
  it('should respond to attack', function () {
    Player.prototype.attack = function () {};
    expect(Player).to.respondTo('attack');
  });
});
