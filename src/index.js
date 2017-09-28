module.exports = function zeros(expression) {

var arr=expression.split(/\*/g);
console.log(arr);
var arr2=[];
var re=/\!{2}/;
for (var i=0; i<arr.length; i++){
if (arr[i].match(re)){
arr2.push(counterZeros(arr[i]));

}
else arr2.push(Math.floor(counterZeros(arr[i])/2));



}
console.log(arr2);

  function counterZeros(exp){
  var counter=0;
  var N;
var num= parseInt(exp);
//console.log (num);


  N =Math.log(num) / Math.log(5);
  for (var i=1; i<=N; i++){
counter += num/Math.pow(5,i)

}
 return Math.floor(counter);
}
var result = arr2.reduce(function(sum, current) {
  return sum + current;
}, 0);

return result;
}
