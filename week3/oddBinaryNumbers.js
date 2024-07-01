function generateOddBinaryNumbers(n) {
    const queue = [];
    const result = [];
    // Start with the first odd binary number
    queue.push('1');
    while (queue.length > 0) {
        const binary = queue.shift();
        const decimal = parseInt(binary, 2);
        if (decimal > n) {
            break;
        }
        if (decimal % 2 === 1) {
            result.push(binary);
        }
        // Generate the next binary numbers
        queue.push(binary + '0');
        queue.push(binary + '1');
    }
    return result;
}
