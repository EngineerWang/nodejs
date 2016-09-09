var util = require('util');
var Person = require('./person.js');
function Programer(){
	this.name = 'programer';
	Person.call(this);
	util.inherits(this, Person);
}
Programer.prototype.coding = function(){
	console.log('coding...');
}
module.exports = Programer;