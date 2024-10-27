console.log("Enter speed of the car:");

process.stdin.on('data', (input)  => {
    const speed = parseInt(input.toString().trim());

    if (isNaN(speed)) {
        console.log("Enter a valid number.");    
    }

    const speedLimit = 70;
    const demeritPointsin5= 5;
    const speedPoints = 12;
    

    if(speed <= speedLimit) {
        console.log("Ok");
    }else {
        const points = Math.floor((speed - speedLimit) / demeritPointsin5)
        console.log(`Points: ${points}`)

       if (points > speedPoints){
        console.log("License suspended");
       }       
    }
});
