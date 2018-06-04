// Code your solution in this file!
function logDriverNames(drivers) {
   return drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  const results = drivers.filter(driver => driver.hometown == location);
    return results.forEach(function(result){
      console.log(result.name);
    });
}

function driversByRevenue(drivers) {
  // const temp = drivers.slice().sort(function(a, b) {
  //   return a.revenue - b.revenue;
  // });
  //  return temp;
  const revenueSorter = function (num1, num2) {
  return num1.revenue - num2.revenue;
};
  best_array = drivers.slice().sort(revenueSorter);
  // const array_revenue = [];
  // drivers.forEach(function(driver){
  //   array_revenue.push(driver.revenue);
  // });
  // const best_array = [];
  // array_revenue.sort(revenueSorter);
  // for (let i = 0; i < drivers.length; i++) {
  //   for (let count = 0; count < array_revenue.length; count++) {
  //     if (drivers[i].revenue == array_revenue[count]) {
  //         best_array.push(drivers[i]);
  //     }
  //   }
  // }
  // debugger;
  return best_array;
}

function driversByName(drivers) {
const array = drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return array;
}

function totalRevenue(drivers) {
  let totalprice = 0;
  drivers.forEach(function(driver) {
    totalprice += driver.revenue;
  });
  return totalprice;
}

function averageRevenue(drivers) {
  let totalprice = 0;
  drivers.forEach(function(driver) {
    totalprice += driver.revenue;
  })
  let averageprice = totalprice/drivers.length;
  return averageprice;
}
