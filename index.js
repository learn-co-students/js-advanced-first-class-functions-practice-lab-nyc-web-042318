// Code your solution in this file!

const logDriverNames = function(arr) {
  arr.forEach(function(driver) { console.log(driver.name) })
}

const logDriversByHometown = function(arr, hometown) {
  arr.forEach(function(driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  })
}

const driversByRevenue = function(arr) {
  const newArr = [...arr]
  return newArr.sort(function(a, b) {
    return a.revenue - b.revenue;
  })
}

const driversByName = function(arr) {
  const newArr = [...arr]
  return newArr.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  })
}

const collectTotalRevenue = function (agg, el, i, arr) {
  return agg + el.revenue;
}

const totalRevenue = function(arr) {
  return arr.reduce(collectTotalRevenue, 0);
}

const averageRevenue = function(arr) {
  return totalRevenue(arr)/arr.length;
}
