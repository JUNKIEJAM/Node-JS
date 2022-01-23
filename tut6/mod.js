console.log("Module.js")

function average(arr){

    let sum=0;
    arr.forEach(element=>{
        sum+=element;
    });

    return sum/arr.length;
}

module.exports=average={
    avg:average,
    name:"Harry",
    repo:"gitHub"

}