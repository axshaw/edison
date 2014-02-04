var should = require('should');
var collector = require('../web.js');
var Edison = require('../app/edison.js');
var DB = require('./helperTestDB.js');

var testDB = new DB();

describe('test to validate edison works',function()	{
	

	it('should create object to store time of contact & edison id and call dm function to submit - mockDB will return true if called', function(done){
                var eddy = new Edison(00001,testDB);
		
		eddy.should.be.an.instanceOf(Object).and.have.property('edID',00001);
		eddy.should.have.property('heartbeatTime').and.be.an.instanceOf(Date);
		eddy.registerHeartbeat().should.equal(true);
		done();
        });




	

});

