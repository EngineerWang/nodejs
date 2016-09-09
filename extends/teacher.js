var util = require('util');
var Person = require('./person.js');
function Teacher(){
	this.name = 'teacher';
	Person.call(this);
	util.inherits(this, Person);
}
Teacher.prototype.teaching = function(){
	console.log('teaching...');
}
module.exports = Teacher;