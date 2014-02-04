//mock db class

function DB()	{
}

DB.prototype.updateHeartBeat = function(edID,date)	{
	if((date instanceof Date) && (typeof edID === 'number')){
		return true;
	}else	{
		return false;
	}
}

module.exports = DB;
