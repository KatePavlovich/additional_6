module.exports = function zeros(expression) {

	var counter=0;
	var N;
var num= parseInt(expression);
//console.log (num);


	N =Math.log(num) / Math.log(5);
	for (var i=1; i<=N; i++){
counter += num/Math.pow(5,i)

}
 return Math.floor(counter);
}
