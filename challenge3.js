console.log("Enter your basic salary and benefits separated by a space:");

process.stdin.on('data', (data) => {
    const salary = data.toString().trim();
    const [basic, benefits] = salary.split(' ').map(Number);

    const grossSalary = basic + (benefits || 0); 
    const netSalary = grossSalary - (calculate_Paye(grossSalary) + calculate_NHIF(grossSalary) + calculate_NSSF(grossSalary));

    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Net Salary: ${netSalary}`);
});

function calculate_Paye(grossSalary) {
    if (grossSalary <= 24000) {
        return grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        return grossSalary * 0.25;
    } else if (grossSalary <= 500000) {
        return grossSalary * 0.3;
    } else if (grossSalary <= 800000) {
        return grossSalary * 0.325;
    } else {
        return grossSalary * 0.35;
    }
}

function calculate_NHIF(grossPay) {
    let deduction; // Declare deduction variable
    if (grossPay <= 5999) {
        deduction = 150;
    } else if (grossPay <= 7999) {
        deduction = 300;
    } else if (grossPay <= 11999) {
        deduction = 400;
    } else if (grossPay <= 14999) {
        deduction = 500;
    } else if (grossPay <= 19999) {
        deduction = 600;
    } else if (grossPay <= 24999) {
        deduction = 750;
    } else if (grossPay <= 29999) {
        deduction = 850;
    } else if (grossPay <= 34999) {
        deduction = 900;
    } else if (grossPay <= 39999) {
        deduction = 950;
    } else if (grossPay <= 44999) {
        deduction = 1000;
    } else if (grossPay <= 49999) {
        deduction = 1100;
    } else if (grossPay <= 59999) {
        deduction = 1200;
    } else if (grossPay <= 69999) {
        deduction = 1300;
    } else if (grossPay <= 79999) {
        deduction = 1400;
    } else if (grossPay <= 89999) {
        deduction = 1500;
    } else if (grossPay <= 99999) {
        deduction = 1600;
    } else {
        deduction = 1700;
    }
    return deduction; // Return the deduction
}

function calculate_NSSF(grossSalary) {
    return grossSalary * 0.06; // Calculate NSSF deduction
}

