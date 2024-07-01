function findDuplicate(arr) {    
    const seen = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            return arr[i];
        }
        seen.add(arr[i]);
    }
    return null; // Return null if no duplicate is found}
}

// Apparently a JavaScript object is always a key-value datatype and 
// since the array given to us was with curly brackets, I assume it was
// a syntax error. So I corrected it and assumed it was a normal JavaScript
// array and worked around that.