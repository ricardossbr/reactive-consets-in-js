const holdOn = (time:number)=> {
    const future = Date.now() + time;
    while (Date.now() < future) {}
}

setTimeout( () => console.log("Execution #01"), 4000 );
setTimeout( () => {
    holdOn(3000)
    console.log("Execution #02")
}, 300 );

holdOn(5000);
console.log( "End!");