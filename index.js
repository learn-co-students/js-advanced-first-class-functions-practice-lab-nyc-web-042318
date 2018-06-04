// Code your solution in this file!
function logDriverNames(driver) {
  driver.forEach(function(x) {
  console.log(x.name)})
};

function logDriversByHometown(driver, home) {
  driver.forEach(function(x) {
    if (x.hometown === home )
      console.log(x.name)})
};

function driversByRevenue(driver) {
 return driver.slice().sort(function (num1, num2) {return (num1.revenue-num2.revenue)})
};

function driversByName(driver) {
   return driver.slice().sort(function (name1, name2) { return name1.name.localeCompare(name2.name)})
};

function totalRevenue(driver) {
  function total(agg,el,i,arr) {
  return agg + el.revenue};

return driver.reduce(total, 0);
};

function averageRevenue(driver){
   return (totalRevenue(driver) / driver.length)
};
