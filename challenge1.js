const students = {}; // Store multiple students
console.log('Enter student name and their marks (type "done" to finish):');

process.stdin.on('data', (input) => {
    const trimmedInput = input.toString().trim();

    if (trimmedInput.toLowerCase() === "done") { // Check for "done"
        process.stdin.pause(); // Stop listening for input
        console.log('You entered: done');
        console.log('Final student list:');
        
        // Output student's name, marks, and grade
        for (const [name, marks] of Object.entries(students)) {
            const grade = studentGrade(marks); // Calculate the grade
            console.log(`Name: ${name}, Marks: ${marks}, Grade: ${grade}`);
        }
        return; // Exits the function
    }

    let [name, marks] = trimmedInput.split(" ");
    marks = parseInt(marks);

    if (name && !isNaN(marks) && marks >= 0 && marks <= 100) {
        students[name] = marks; // Stores marks under the student's name
        const grade = studentGrade(marks); // Calculate grade
        console.log(`Name entered: ${name}`);
        console.log(`Marks entered: ${marks}`);
        console.log(`Grade entered: ${grade}`);
    } else {
        console.log(`Invalid input`);
    }
});

function studentGrade(marks) {
    if (marks > 79) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else if (marks >= 40) {
        return "D";
    } else {
        return "E";
    }
}