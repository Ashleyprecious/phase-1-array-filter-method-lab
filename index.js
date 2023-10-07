// Code your solution here
function findMatching(drivers,string) {
    const newDriversList=drivers.filter(driver=> string.toLowerCase()===driver.toLowerCase());
    return newDriversList;
}
console.log(newDriversList);

function fuzzyMatch(drivers,string){
    const driverLenght=string.length;
    const newDriversList=drivers.filter(driver=> string.toLowerCase()===driver.toLowerCase().substr(0,driverLenght));
    return newDriversList;
}
console.log(newDriversList)

function matchName(drivers,name) { // name to the driver
    const newDriversList=drivers.filter(driver=> driver.name.toLowerCase()===name.toLowerCase());
    return newDriversList;

}
console.log(matchName)