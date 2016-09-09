function Person(){
	//this.name = 'person';
	this.sleeping = function(){
		console.log(this.name + ' sleeping...');
	};
	this.eating = function(){
		console.log(this.name + ' eating...');
	};
}
module.exports = Person;