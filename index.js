// Code your solution in this file!
function logDriverNames (driverArr) {
  return driverArr.forEach(driver => console.log(driver.name))
}

function logDriversByHometown (driverArr, loc) {
  return driverArr.forEach(driver => (driver.hometown == loc) ? console.log(driver.name) : false)
}

// function driversByRevenue (function(driverArr) {
//     return driverArr.forEach(driver => driver.revenue).sort()
// } =>
function driversByRevenue (driverArr) {
  return [...driverArr].sort(function(elem1, elem2) {
    return elem1.revenue - elem2.revenue
  })
}

function driversByName (driverArr) {
  return [...driverArr].sort(function(elem1, elem2) {
    return elem1.name > elem2.name ? 1 : ((elem2.name > elem1.name) ? -1 :0)
  })
}

function totalRevenue (driverArr) {
  return driverArr.reduce( (acc, val) => acc + val.revenue, 0
  )
}
function averageRevenue (driverArr) {
  return totalRevenue(driverArr) / driverArr.length
}