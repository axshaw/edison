
var should    = require('should');
var request   = require('supertest');
var assert    = require('assert');
var collector = require('../web.js');

describe('Get /', function(){
	it('should respond true if tests are working',function(){
		(5).should.be.exactly(5).and.be.a.Number;
	})

    it('should respond OK',function(done){
        request(collector.app)
        .get('/')
        .end(function(err, res){
          res.status.should.equal(200);
          done(err);
        });
    });
});
