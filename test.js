/* global describe, it */
/* jshint expr: true */

'use strict';

var expect = require('chai').expect;
Game = require(process.cwd() + '/lib/Game');

describe('Game', function () {
  it ('should expect true and false', function () {
    expect(true).to.be.true;
    expect(false).to.be.false;
  });
});

describe('Game', function () {
  it('should give weapons', function () {
    expect(getRandomWeapon).to.be.true;
    return 'weapon available';
  });
});

describe('shufflePlayerOrder', function () {
  it('should return "Players Shuffled"', function () {
    var constructed = new Game();
    expect(constructed.shufflePlayerOrder()).to.be.true;
    });
  });

describe('attack', function () {
  it('should return "attacked"', function () {
    var constructed = new Game();
    expect(constructed.attack()).to.be.true;
  });
});
