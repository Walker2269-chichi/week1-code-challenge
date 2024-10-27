const student ={}
console.log('Enter students name and their marks:');

process.stdin.on('data', (input)  => {
    const userInput = parseInt(input)
    if(userInput ==="done") {
        process.stdin.pause();
        
   
    console.log(`You entered: ${userInput}`)}
    else {
        const marks = parseInt(userInput);
        if (!isNaN(marks) && marks >= 0 && marks <= 100 ) {
            student.marks = marks;
            console.log(`Marks entered: ${marks}`);
            console.log(`Grade: ${studentName(marks)}`);
        } else {
            console.log("Invalid input");
        }
    }
}
);

function studentName(marks) {
    if (marks > 79) {
        return "A";
    } else if (marks >= 60 && marks <= 79) {
        return "B";
    } else if (marks >= 50 && marks <= 59) {
        return "C";
    } else if (marks >= 40 && marks <= 49) {
        return "D";
    } else {
        return "E";
    }
}