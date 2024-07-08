const fibonacci = function(n) {
        // Base cases
        if (n === 0) return 0;
        if (n === 1) return 1;
    
        // Initialize the first two Fibonacci numbers
        let prev = 0, curr = 1;
    
        // Loop to calculate the nth Fibonacci number
        for (let i = 2; i <= n; i++) {
            let next = prev + curr; // Calculate the next number in the sequence
            prev = curr;            // Update prev to the current number
            curr = next;            // Update curr to the next number
        }
    
        return curr; // The nth Fibonacci number
};

// Do not edit below this line
module.exports = fibonacci;
