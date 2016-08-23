function Person(){
	console.log('thinking...');
	this.think = function(callback){
		setTimeout(function(){
			callback();
		}, 5000);
	};
	this.answer = function(problem){
		console.log(problem);
	}
}
function thinking(){
	console.log('thinking 5 seconds and write the right answer');
}
var person = new Person();
person.think(thinking);
person.answer('answer other problems');