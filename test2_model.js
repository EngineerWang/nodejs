/*function person(){
	this.eat = function(){
		console.log('eat eat eat');
	}
	this.say = function(){
		console.log('say say say');
	}
}
module.exports = person;*/

/*var person = {
	eat: function(){
		console.log('eat eat eat');
	},
	say: function(){
		console.log('say say say');
	}
};*/

//var person = ['zhangsan', 'lisi', 'wangwu'];

function Person(){
	this.person = ['zhangsan', 'lisi', 'wangwu'];
}
var person = new Person();
/*var person = {'arr':['zhangsan', 'lisi', 'wangwu']};*/
module.exports = person;