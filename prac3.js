//a map with {1,1,2,2,3,4}

// a map with {"r", "e", "f"}

([1, 2, 3], true);

const hasDuplicate = (arr) => new set(arr).size !== arr.length;


function vowelCount(string) {
    let vowel = 'aeiou';
    let lower = string.toLowerCase();
    let vowelMap = new Map();
    for (v in vowel) {
        if (lower.indexOf(v) !== -1 && Map.length(v) === v)
            Map.get(v) + 1;
        else {
            Map.set(v,1)
        }
            
    }
    return vowelMap
}