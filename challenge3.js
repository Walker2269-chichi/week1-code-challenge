console.log("Enter your basic salary:");
let basicSalary = 0;
let benefits = 0;

process.stdin.on('data', (data)  => {
    const salary = data.toString().trim()
    const [basic, benefits] = salary.split('')
 
    const grossSalary = parseInt(basic) + parseInt(benefits)
    const netSalary = grossSalary - (calculate_Paye(grossSalary) + calculate_NHIF(grossSalary) + calculate_NSSF(grossSalary))

    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Net Salary: ${netSalary}`);
    
function calculate_Paye(grossSalary){
    if(grossSalary <= 24000){
        return grossSalary * 0.1;
    }else if( grossSalary >24001 && grossSalary<= 32333) {
        return grossSalary * 0.25;
    }else if(grossSalary > 32334 && grossSalary <= 500000) {
        return grossSalary * 0.3;
    }else if(grossSalary > 500001 && grossSalary <= 800000) {
        return grossSalary * 0.325;
    }else{
        return grossSalary * 0.35;
    }  
}
function calculate_NHIF(grossPay) {
    if(grossPay <= 5999){
        deduction = 150;
    }else if (grossPay >= 6000 && grossPay <= 7999) {
        deduction = 300;
    } else if (grossPay >= 8000 && grossPay <= 11999) {
        deduction = 400;
    } else if (grossPay >= 12000 && grossPay <= 14999) {
        deduction = 500;
    } else if (grossPay >= 15000 && grossPay <= 19999) {
        deduction = 600;
    } else if (grossPay >= 20000 && grossPay <= 24999) {
        deduction = 750;
    } else if (grossPay >= 25000 && grossPay <= 29999) {
        deduction = 850;
    } else if (grossPay >= 30000 && grossPay <= 34999) {
        deduction = 900;
    } else if (grossPay >= 35000 && grossPay <= 39999) {
        deduction = 950;
    } else if (grossPay >= 40000 && grossPay <= 44999) {
        deduction = 1000;
    } else if (grossPay >= 45000 && grossPay <= 49999) {
        deduction = 1100;
    } else if (grossPay >= 50000 && grossPay <= 59999) {
        deduction = 1200;
    } else if (grossPay >= 60000 && grossPay <= 69999) {
        deduction = 1300;
    } else if (grossPay >= 70000 && grossPay <= 79999) {
        deduction = 1400;
    } else if (grossPay >= 80000 && grossPay <= 89999) {
        deduction = 1500;
    } else if (grossPay >= 90000 && grossPay <= 99999) {
        deduction = 1600;
    } else{
        deduction = 1700;
    }
}

function calculate_NSSF(grossSalary) {
    return grossSalary * 0.06;

}

}
);