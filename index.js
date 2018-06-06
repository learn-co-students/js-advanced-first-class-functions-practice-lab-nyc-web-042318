// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (element){console.log(element.name)});
}

const logDriversByHometown = function (driversArr, location) {
  driversArr.forEach(function (el) { if (el.hometown === location) { console.log(el.name)}  })
}


const driversByRevenue = function (driversArr) {
  return [...driversArr].sort ( function (first, second) {return first.revenue - second.revenue} )
}

const driversByName = function (driversArr) {
  return [...driversArr].sort (function (first, second) { return first.name.localeCompare(second.name)} )

}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (tot, driver) {
    return driver.revenue + tot;
  }, 0);
};


const averageRevenue = function (driversArr) {
  return  totalRevenue(driversArr) / driversArr.length
}
