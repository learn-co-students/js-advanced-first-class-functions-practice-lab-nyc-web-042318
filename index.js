// Code your solution in this file!
function logDriverNames(drivers) {
  const logName = function (el, i, arr) {
    console.log(el.name);
  }
  drivers.forEach(logName);
  return ;
}


function logDriversByHometown(drivers, town) {
  const logTown = function (el, i, arr) {
    if(el.hometown === town ){
      console.log(el.name);
    }
  }
  drivers.forEach(logTown);
}

function driversByRevenue(drivers) {
  let temp = drivers.slice(0).sort(function (a, b) {
      return a.revenue - b.revenue;
  });
  return temp;
}

function driversByName(drivers) {
  let temp = drivers.slice(0).sort(function (a, b) {
      return a.name.localeCompare(b.name);
  });
  return temp;
}

function totalRevenue(drivers) {
  const reducer = function (agg, el, i , arr) {
    return agg + el.revenue;
  }
  let result =  drivers.reduce(reducer,0);

  return result;
}

function averageRevenue(drivers) {
  const reducer = function (agg, el, i, arr) {
    return agg*i/(i+1)+el.revenue/(i+1);
  }
  let result = drivers.reduce(reducer,0);
  return result;
}
