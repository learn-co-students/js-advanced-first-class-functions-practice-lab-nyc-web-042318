const logDriverNames = function(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    };
  });
}

const driversByRevenue = function(drivers) {
  return [...drivers].sort(function(d1, d2) {
     return d1.revenue - d2.revenue;
  })
}

const driversByName = function(drivers) {
  return [...drivers].sort(function(d1, d2) {
    name1= d1.name
    name2= d2.name
    return (name1).localeCompare(name2);
  });
}

const totalRevenue = function(drivers) {
  return drivers.reduce(function (agg, el, i , arr) {
    return agg += el.revenue
  }, 0)
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
}
