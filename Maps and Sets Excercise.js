// hasDuplicate()
const hasDuplicate = arr => new Set(arr).size !== arr.length

// vowelCount()

function vowel(char) {
    return 'aeiou'.includes(char);
}

function vowelCount(str) {
    const vMap = new Map();
    for (let char of str) {
        let lower = char.toLowerCase();
        if (vowel(lower)) {
            if (vMap.has(lower)) {
                vMap.set(lower, vMap.get(lower) + 1)
            } else {
                vMap.set(lower, 1)
            }
        }
    }
    return vMap;
}