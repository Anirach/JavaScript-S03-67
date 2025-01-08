function sumEvenNumbers(start, end) {
    // Implement the code here
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }

    
    
    }
    
    console.log("The sum of even numbers from 1 to 10 is: " + sumEvenNumbers(1, 10)); //30
    console.log("The sum of even numbers from 8 to 20 is: " + sumEvenNumbers(8, 20)); //98
    
    module.exports = sumEvenNumbers; // Export the function for testing