export const getDigitSum = (num) => {
    return Math.abs(num)
        .toString()
        .split("")
        .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
};


// Function to check if a number is prime
export const getIsPrime = (num) => {
    if (num < 2) return false; 
    if (num % 2 === 0) return num === 2; 
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false; 
    }

    return true; 
}


// Function to check if a number is a  perfect number 
export const getIsPerfect = (num) => {
    if (num < 2) return false; 
    let sum = 0; 

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) sum += i; 
    }
    return sum === num; 
}

// Function to check if a number is an Armstrong number 
const isArmStrong = (num) => {
    const digits = String(num).split(""); // Convert number to array of digits
    const length = digits.length; // Number of digits 
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), length), 0); 
    return sum === num; 
}; 

// Function to determine properties of a number 
export const getNumberProperties = (num) => {
    const properties = []; 
    const isArmStrongNumber = isArmStrong(num); 
    const isEven = num % 2 === 0; 

    if (isArmStrongNumber) properties.push("armstrong"); 
    if (isEven) properties.push("even"); 
    else properties.push("odd"); 

    return properties
}