const returnFirstTwoDrivers = (drivers = []) => [drivers[0], drivers[1]];

const returnLastTwoDrivers = (drivers = []) => [(drivers[drivers.length - 2]), (drivers[drivers.length - 1])];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = multiplier => fare => multiplier * fare;

const fareDoubler = fare => fare * 2; 

const fareTripler = fare => fare * 3;

function selectDifferentDrivers(drivers = [], cb){
    return cb(drivers);
}