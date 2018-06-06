// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(`${driver.name}`));
}

function logDriversByHometown(drivers, location) {
  let driverObj = drivers.filter(driver => (`${driver.hometown}`=== location))
  driverObj.map(driver=>console.log(`${driver.name}`))
}

function driversByRevenue(drivers, revenue) {
  let newDriversCollection = Array.from(drivers)
  return newDriversCollection.sort(function(driver1, driver2){
    return driver1.revenue - driver2.revenue
  })
}

function driversByName(drivers) {
  let newDriversCollection = Array.from(drivers)
  return newDriversCollection.sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

function totalRevenue(drivers){
  let newDriversCollection = Array.from(drivers)
  return newDriversCollection.reduce(function (total, currentDriver) {
    return currentDriver.revenue+total;
  }, 0);
};

function averageRevenue(drivers) {
  let newDriversCollection = Array.from(drivers)
  return totalRevenue(newDriversCollection) / newDriversCollection.length
}
