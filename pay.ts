
var cars :any[];
var totalSpace = 50;

function enter(plateNumber,time){
    let position = checkForALot();
    const vehicle = {
        plateNumber,
        time
    }
    if(position){
        cars.push(vehicle)
    }
    return position;
}
function checkForALot(){
    if(totalSpace == 0)return false;
    totalSpace--;
    return true;
}
function exit(vehicle,exitTime){

    var index = cars.indexOf(vehicle);
    if (index == -1 ) return -1;
    cars.splice(index,1);
    totalSpace++;
    var startTime;
    if(vehicle.time < 6) startTime = 6;
    else startTime = vehicle.time;
    if (exitTime <= 6) exitTime = 24;

    if(startTime < exitTime){
       return costFromStartToEnd(startTime,exitTime)
    }
    else {
        // start : 24  ,  6 : end
        return (costFromStartToEnd(startTime,24) + costFromStartToEnd(6,exitTime))
        
    }
}

function costFromStartToEnd(startTime,exitTime){
    var totalCost=0;
    if(startTime >=6 && exitTime <= 10){
        totalCost += (3*(exitTime - startTime))
    }
    if(startTime >=6 && exitTime > 10){
        totalCost += (3*(10 - startTime))
        totalCost +=(exitTime-10);  
    }
    return totalCost;
}
