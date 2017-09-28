module.exports = function zeros(expression) {
  var ex= String(expression).split('!').map(Number);
var res1=1;

for (var i=0; i< ex.length; i++){
	var res1 =res1 * ex[i];
return res1;

	}
console.log(res1);
	var n=5;
	while (n<res1){
		
		
	 res = res + (res1/n);
	 
	 n= n*5;
}
 return res;
}
