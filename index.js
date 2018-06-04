// Code your solution in this file!
function logDriverNames(array) {
  array.forEach(function(element) {
    console.log(element.name)
  })
}

function logDriversByHometown(array, string) {
  array.forEach(function(element) {
    if (element.hometown === string) {
      console.log(element.name)
    }
  })
}

const driversByRevenue = function (array) {
  return array.slice().sort(function(d1,d2) {
    return d1.revenue - d2.revenue;
  });
};

const driversByName = function (array) {
  return array.slice().sort(function(d1,d2) {
    return d1.name.localeCompare(d2.name);
  });
};

const totalRevenue = function (array) {
  return array.reduce(function (total, driver) {
    return driver.revenue + total;
  }, 0)
}

const averageRevenue = function (array) {
  return totalRevenue(array)/(array.length)
}
