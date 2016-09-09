var util = require('util');
var Person = require('./person.js');
function Student(){
	this.name = 'student';
	Person.call(this);
	util.inherits(this, Person);
}
Student.prototype.studying = function(){
	console.log('studing...');
}
module.exports = Student;