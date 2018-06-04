// Code your solution in this file!
function logDriverNames(array) {
  return array.forEach(function(object) {console.log(object.name)});
}

function logDriversByHometown(array, town) {
  return array.forEach(function(object) {if (object.hometown === town)
    {console.log(object.name)}} );
}

function driversByRevenue(array) {
  return array.slice().sort(function (num1, num2) { return num1.revenue - num2.revenue } );
}

function driversByName(array) {
  return array.slice().sort(function (name1, name2) { return name1.name.localeCompare(name2.name) } );
}

function totalRevenue(array) {
  //reduce(callbackFn, initial value)
  //function callbackFn (agg, el, i, arr)
  //not all the parameters need to be passed in for callbackFn
  //as shown below, we only passed in agg and el
  return array.reduce(function(total, object) {return total + object.revenue}, 0);
}

function averageRevenue(array) {
  let total = totalRevenue(array);
  return total/(array.length);
}
