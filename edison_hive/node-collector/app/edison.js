//edison.js

function Edison(edID,db){
	this.edID = edID;
	this.db = db;
	this.heartbeatTime = new Date();
}

Edison.prototype.registerHeartbeat = function() {
	
}

Edison.prototype.isAlive = function() {
	return (this.db.lastHeartBeat == 30);
}


module.exports = Edison;
